const conf ={
    appwriteUrl:String(import.meta.env.VITE_APPWRITER_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITER_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITER_DATABASE_ID),
    appwriteCollectiontId:String(import.meta.env.VITE_APPWRITER_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITER_BUCKET_ID)
}

export default conf