import conf from "../conf/conf.js"; 
import {Client ,ID , Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client();
    Databases;
    bucket;
    // buckets means stroage same

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectiontId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite server :: createPost :: error", error);
        }
    }
    async updatePost(slug,{title, content, featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectiontId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite server :: createUpdate :: error", error);
        }
    }
    async deleatePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectiontId,
                slug
            )
        } catch (error) {
            console.log("Appwrite server :: deletePost :: error", error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectiontId,
                slug
            )
        } catch (error) {
            console.log("Appwrite server :: getPost :: error", error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectiontId,
                queries,
                
            )
        } catch (error) {
            console.log("Appwrite server :: getPosts :: error", error);
            return false;
        }
    }
    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite server :: uploadFile :: error", error);
            return false; 
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite server :: deleteFile :: error", error);
            return false; 
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,  
            fileId
        )
        
    }
    

}
const service = new Service()
export default service