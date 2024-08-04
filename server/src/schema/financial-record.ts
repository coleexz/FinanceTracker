import mongoose from 'mongoose';

// Define the interface for the financial record
interface FinancialRecord {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

// Define the properties of the financial record
const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
    // The user ID of the financial record
    userId: { type: String, required: true },
    // The date of the financial record
    date: { type: Date, required: true },
    // The description of the financial record
    description: { type: String, required: true },
    // The amount of the financial record
    amount: { type: Number, required: true },
    // The category of the financial record
    category: { type: String, required: true },
    // The payment method of the financial record
    paymentMethod: { type: String, required: true }
});

//model: es una funcion que recibe dos argumentos, el nombre del modelo y el esquema
//y se utiliza para crear un modelo de mongoose que se puede utilizar para interactuar con la base de datos
const FinancialRecordModel = mongoose.model<FinancialRecord>('FinancialRecord', financialRecordSchema);

// Export the financial record model
export default FinancialRecordModel;