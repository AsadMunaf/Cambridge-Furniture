import mongoose from 'mongoose'
import shortid from 'shortid'

const {String,Number} = mongoose.Schema.Types;
const productSchema = new mongoose.Schema({
   name:{
       type: String,
       required: true
   },
   price:{
       type:Number,
       required: true
   },
   sku:{
       type: String,
       unique:true,
       default:shortid.generate()
   },
   descriotion:{
       type:String,
       required:true
   },
})

export default mongoose.models.Product || mongoose.model('Product', productSchema);