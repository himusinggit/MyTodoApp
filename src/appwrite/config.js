import { Client, ID, Query, TablesDB } from "appwrite";
import conf from "../conf/conf";
import authService from "./auth";
class DataBase{
    client = new Client();
    tablesDB;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.tablesDB = new TablesDB(this.client);
    }
    async addRow({todo,userId}){
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: ID.unique(),
                data: { todo:todo,userId:userId }
            });
        } catch (error) {
            console.log(error);
        }

    }
    async deleteRow(rowId){
        try {
            return await this.tablesDB.deleteRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteTableId,
            rowId: rowId
        });
        } catch (error) {
            console.log(error);
        }
    }
    async listRows(userId){
        try {
            const user=await authService.getUser();
            console.log(user);
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries: [Query.equal('userId', userId)] 
            });
        } catch (error) {
            console.log(error);
        }
    }
}
const dataService=new DataBase();
export default dataService