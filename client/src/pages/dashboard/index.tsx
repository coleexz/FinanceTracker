import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";

export const Dashboard = () => {
    const user = useUser();
    return (
        <div className = "dashboard-container">
            {""}
            <h1> Welcome {user?.user?.fullName}! Here Are Your Finances:</h1>
            <FinancialRecordForm />
            <FinancialRecordList />
        </div>
    );
}