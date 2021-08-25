import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  getFilterSchemaFor
} from '@loopback/rest';
import {AccountDriver} from '../models';
import {AccountDriverRepository} from '../repositories';

export class AccountdriverController {
  constructor(
    @repository(AccountDriverRepository)
    public accountDriverRepository : AccountDriverRepository,
  ) {}

  @post('/account-drivers')
  @response(200, {
    description: 'AccountDriver model instance',
    content: {'application/json': {schema: getModelSchemaRef(AccountDriver)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountDriver, {
            title: 'NewAccountDriver',
            exclude: ['id'],
          }),
        },
      },
    })
    accountDriver: Omit<AccountDriver, 'id'>,
  ): Promise<AccountDriver> {
    return this.accountDriverRepository.create(accountDriver);
  }

  @get('/account-drivers/count')
  @response(200, {
    description: 'AccountDriver model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AccountDriver) where?: Where<AccountDriver>,
  ): Promise<Count> {
    return this.accountDriverRepository.count(where);
  }

  @get('/account-drivers')
  @response(200, {
    description: 'Array of AccountDriver model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AccountDriver, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AccountDriver) filter?: Filter<AccountDriver>,
  ): Promise<AccountDriver[]> {
    return this.accountDriverRepository.find(filter);
  }

  @patch('/account-drivers')
  @response(200, {
    description: 'AccountDriver PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountDriver, {partial: true}),
        },
      },
    })
    accountDriver: AccountDriver,
    @param.where(AccountDriver) where?: Where<AccountDriver>,
  ): Promise<Count> {
    return this.accountDriverRepository.updateAll(accountDriver, where);
  }

  @get('/account-drivers/{id}')
  @response(200, {
    description: 'AccountDriver model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AccountDriver, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AccountDriver, {exclude: 'where'}) filter?: FilterExcludingWhere<AccountDriver>
  ): Promise<AccountDriver> {
    return this.accountDriverRepository.findById(id, filter);
  }

  @patch('/account-drivers/{id}')
  @response(204, {
    description: 'AccountDriver PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountDriver, {partial: true}),
        },
      },
    })
    accountDriver: AccountDriver,
  ): Promise<void> {
    await this.accountDriverRepository.updateById(id, accountDriver);
  }

  @put('/account-drivers/{id}')
  @response(204, {
    description: 'AccountDriver PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() accountDriver: AccountDriver,
  ): Promise<void> {
    await this.accountDriverRepository.replaceById(id, accountDriver);
  }

  @del('/account-drivers/{id}')
  @response(204, {
    description: 'AccountDriver DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.accountDriverRepository.deleteById(id);
  }

   // Show similar accounts with same driver and profile in current stage 
   @get('/account-drivers/similarassignments')
   @response(200, {
     description: 'Array of AccountDriver model instances',
     content: {
       'application/json': {
         schema: {
           type: 'array',
           items: getModelSchemaRef(AccountDriver, {includeRelations: true}),
         },
       },
     },
   })
     async findSimilarAssignments(
      @param.query.string('period') period: string, 
      @param.query.string('driver') driver: string,
      @param.query.string('profile') profile: string,
      @param.query.string('refNum') refNum: string,
      //  @param.query.object('filter', getFilterSchemaFor(AccountDriver)) filter?: Filter,
      ): Promise<AccountDriver[]> {
   
     const accDriverCollection = (this.accountDriverRepository.dataSource.connector as any).collection('AccountDriver')
   
     return await accDriverCollection.aggregate([
        {
          '$lookup': {
            'from': 'AccountHierarchy', 
            'localField': 'refNum', 
            'foreignField': 'refNum', 
            'as': 'AH'
          }
        }, {
          '$unwind': {
            'path': '$AH', 
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$project': {
            '_id': 0, 
            'refNum': 1, 
            'AH.name': 1, 
            'driver': 1, 
            'profile': 1, 
            'period': 1
          }
        }, {
          '$match': {
            'driver': driver, 
            'profile': profile, 
            'period': period, 
            'refNum': {
              '$ne': refNum
            }
          }
        }, {
          '$sort': {
            'refNum': 1
          }
        }
    ]).get();
   }

 // Show similar accounts with same driver and profile in same stage excluding selected account
 @get('/account-drivers/similaraccounts')
 @response(200, {
   description: 'Array of AccountDriver model instances',
   content: {
     'application/json': {
       schema: {
         type: 'array',
         items: getModelSchemaRef(AccountDriver, {includeRelations: true}),
       },
     },
   },
 })
   async findSimilarAccounts(
    @param.query.string('period') period: string, 
    @param.query.string('driver') driver: string,
    @param.query.string('profile') profile: string,

    //  @param.query.object('filter', getFilterSchemaFor(AccountDriver)) filter?: Filter,
    ): Promise<AccountDriver[]> {
 
   const accoDriverCollection = (this.accountDriverRepository.dataSource.connector as any).collection('AccountDriver')
 
   return await accoDriverCollection.aggregate([
    {
      '$lookup': {
        'from': 'AccountHierarchy', 
        'localField': 'refNum', 
        'foreignField': 'refNum', 
        'as': 'AH'
      }
    }, {
      '$unwind': {
        'path': '$AH', 
        'preserveNullAndEmptyArrays': false
      }
    }, {
      '$project': {
        '_id': 0, 
        'refNum': 1, 
        'AH.name': 1, 
        'driver': 1, 
        'profile': 1, 
        'period': 1
      }
    }, {
      '$match': {
        'driver': driver, 
        'profile': profile, 
        'period': period, 
      }
    }, {
      '$sort': {
      'refNum': 1
      }
    }
  ]).get();
 }

 // Show account details
 @get('/api/account-drivers/accountDetails')
 @response(200, {
   description: 'Array of Account Details',
   content: {
     'application/json': {
       schema: {
         type:'array',
         items: getModelSchemaRef(AccountDriver, {includeRelations: true}),
       },
     },
   },
 })
   async findAccountDetails(
    @param.query.string('period') period: string, 
    @param.query.string('refNum') refNum: string,

    ): Promise<AccountDriver[]> {
 
   const acCollection = (this.accountDriverRepository.dataSource.connector as any).collection('AccountDriver')
 
   return await acCollection.aggregate([
    {
      '$lookup':{from: 'Driver',
      localField: 'driver',
      foreignField: 'driverName',
      as: 'driverLink'}
    },
    {
      '$match':{
        'period':period,
        'refNum':refNum,
      }
    },{
        '$lookup': {
          'from': 'Cost', 
          'let': {
            'per': '$period', 
            'ref': '$refNum'
          }, 
          'pipeline': [
            {
              '$match': {
                '$expr': {
                  '$and': [
                    {
                      '$eq': [
                        '$$per', '$period'
                      ]
                    }, {
                      '$eq': [
                        '$$ref', '$refNum'
                      ]
                    }
                  ]
                }
              }
            }
          ], 
          'as': 'costLink'
        }
      }, {
        '$lookup': {
          'from': 'Volume', 
          'let': {
            'per': '$period', 
            'ref': '$refNum'
          }, 
          'pipeline': [
            {
              '$match': {
                '$expr': {
                  '$and': [
                    {
                      '$eq': [
                        '$$per', '$period'
                      ]
                    }, {
                      '$eq': [
                        '$$ref', '$refNum'
                      ]
                    }
                  ]
                }
              }
            }
          ], 
          'as': 'volLink'
        }
      }
  ]).get();
 }
//Check if account has already assigned with driver and profile
 @get('/account-drivers/findAccountAssign')
 @response(200, {
   description: 'Array of Account Driver model instances',
   content: {
     'application/json': {
       schema: {
         type: 'array',
         items: getModelSchemaRef(AccountDriver, {includeRelations: true}),
       },
     },
   },
 })
   async findAccountAssignment(
    @param.query.string('refNum') refNum: string, 
    @param.query.string('period') period: string, 
    @param.query.string('driver') driver: string,
    @param.query.string('profile') profile: string, 

    ): Promise<AccountDriver[]> {
 
   const dqCollection = (this.accountDriverRepository.dataSource.connector as any).collection('AccountDriver')
 
   return await dqCollection.aggregate([
       {
         '$match':{
          'refNum': refNum,
          'period': period,
          'driver': driver,
         'profile': profile
         }
       }
   ]).get();
 }

 //Assign Driver and Profile to other account
 @patch('/account-drivers/assignDriverProfile')
@response(204, {
  description: 'Array of DriverQuantity model instances',
})
  async updateDest(
    @param.query.string('refNum') refNum: string, 
    @param.query.string('period') period: string, 
    @param.query.string('driver') driver: string,
    @param.query.string('profile') profile: string, 


   ): Promise<void> {
    const updateCollection = (this.accountDriverRepository.dataSource.connector as any).collection('AccountDriver')
    return await updateCollection.updateOne(
        {
        'refNum': refNum,
        'period': period,
        },
      {
        '$set':{
          'driver': driver,
          'profile': profile,
        }
      }
);
}

}
