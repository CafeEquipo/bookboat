const models = require('../models')

export class UserService{
    public static createUser(newUserEmail:string):Promise<any>{
        let user = models.User.build({
            email:newUserEmail
          })
          return user.save()
    }
}
