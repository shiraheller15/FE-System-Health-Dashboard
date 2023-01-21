import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { IScannerUnifiedFormat } from "../../../types/types";

import SingleScanner from "./SingleScanner";



describe("SingleScanner",  () => {

  const testScanner: IScannerUnifiedFormat =  {
    productName: "Allure",
    testName: "testName",
    version:"0.0.1",
    scannerName:"Allure",
    numberOfScans: 4,
    numberOfRisksHigh:4,
    numberOfRisksMedium:7,
    numberOfRisksLow: 8
    
   }

    it("Button show more details", () =>  {
    
     const component= render(

        <BrowserRouter>
        <SingleScanner scanner={testScanner}/>
        </BrowserRouter>);
        const buttonElement=component.getByText('More Details');
        fireEvent.click(buttonElement);
     
        expect(global.window.location.pathname).toEqual('/more-details/'+ testScanner.id);
       
        });
        });
  
