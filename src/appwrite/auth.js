import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
class authServiceClass{
    client = new Client()
    account
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId); 
        this.account = new Account(this.client);
    }
    async signup({name,email,password}){
        try {
            const userAcc=await this.account.create({
                                userId: ID.unique(),
                                email: email,
                                password: password,
                                name: name
                        });
        if(userAcc){
        return this.login({email,password})
        }
        else{
            return userAcc;
        }
        } catch (error) {
            console.log(error);
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession({
            email: email,
            password: password
        });
        } catch (error) {
            console.log(error);
        }
    }
    async logout(){
        try {
            const result = await this.account.deleteSessions();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
    }
}
const authService=new authServiceClass();
export default authService;