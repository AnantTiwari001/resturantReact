// This script is for creating a vector database that is used to provide better semantic searches
const HNSWLib= require('langchain/vectorstores/hnswlib');
const embed= require('langchain/embeddings/openai');
const load= require('langchain/document_loaders/fs/text')
const dotenv= require('dotenv')
dotenv.config();
const file = require('./dishes.json');

let data= [];
let metaData=[];

file.map((element, index)=>{
    const tempData= `${element.name} - ${element.desc}`
    data.push(tempData);
    metaData.push({id: index});
})

const addData= async ()=>{
    const vectorStore= await HNSWLib.HNSWLib.fromTexts(
        [...data],
        [...metaData],
        new embed.OpenAIEmbeddings()
    );
    await vectorStore.save('dishes.index')
}
addData();
