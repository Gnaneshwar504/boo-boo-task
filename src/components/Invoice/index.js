import React, { useState } from "react";
import './index.css'

function Invoice() {
       

        const [val,setVal]=useState([]);
        const handleAdd=()=>{
            const abc=[...val,[]]
            setVal(abc)
        }
        const handleChange=(onChangeValue,i)=>{
         const inputdata=[...val]
         inputdata[i]=onChangeValue.target.value;
         setVal(inputdata)
        }
        const handleDelete=(i)=>{
            const deletVal=[...val]
            deletVal.splice(i,1)
            setVal(deletVal)  
        }
        console.log(val,"data-")



    
    return(
        <>
        <div className="container">
        <div id="static" className="invoice-holder clearfix">
            <form method="post" action="/pdf" className="form-horizontal" enctype="multipart/form-data">
                <div className="mobile-btns row visible-xs">
                    <div className="col-xs-6">
                        <button type="submit" className="disabled btn btn-primary btn-block">
                        Download Invoice
                    </button>
                    </div>
                </div>

                <div className="invoice-controls desktop">
                    <div className="btns clearfix">
                        <p>
                            <button type="submit" className="disabled btn btn-primary btn-lg btn-block">
                            Download Invoice
                        </button>
                        </p>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Currency</div>
                        <div className="panel-body">
                            <select className="form-control" name="currency">
                                                            <option value="AFN" >AFN</option>
                                                            <option value="EUR" >EUR</option>
                                                            <option value="ALL" >ALL</option>
                                                            <option value="DZD" >DZD</option>
                                                            <option value="USD" selected="selected">USD</option>
                                                            <option value="AOA" >AOA</option>
                                                            <option value="XCD" >XCD</option>
                                                            <option value="ARS" >ARS</option>
                                                            <option value="AMD" >AMD</option>
                                                            <option value="AWG" >AWG</option>
                                                            <option value="AUD" >AUD</option>
                                                            <option value="AZN" >AZN</option>
                                                            <option value="BSD" >BSD</option>
                                                            <option value="BHD" >BHD</option>
                                                            <option value="BDT" >BDT</option>
                                                            <option value="BBD" >BBD</option>
                                                            <option value="BYN" >BYN</option>
                                                            <option value="BZD" >BZD</option>
                                                            <option value="XOF" >XOF</option>
                                                            <option value="BMD" >BMD</option>
                                                            <option value="INR" >INR</option>
                                                            <option value="BTN" >BTN</option>
                                                            <option value="BOB" >BOB</option>
                                                            <option value="BOV" >BOV</option>
                                                            <option value="BAM" >BAM</option>
                                                            <option value="BWP" >BWP</option>
                                                            <option value="NOK" >NOK</option>
                                                            <option value="BRL" >BRL</option>
                                                            <option value="BND" >BND</option>
                                                            <option value="BGN" >BGN</option>
                                                            <option value="BIF" >BIF</option>
                                                            <option value="CVE" >CVE</option>
                                                            <option value="KHR" >KHR</option>
                                                            <option value="XAF" >XAF</option>
                                                            <option value="CAD" >CAD</option>
                                                            <option value="KYD" >KYD</option>
                                                            <option value="CLP" >CLP</option>
                                                            <option value="CLF" >CLF</option>
                                                            <option value="CNY" >CNY</option>
                                                            <option value="COP" >COP</option>
                                                            <option value="COU" >COU</option>
                                                            <option value="KMF" >KMF</option>
                                                            <option value="CDF" >CDF</option>
                                                            <option value="NZD" >NZD</option>
                                                            <option value="CRC" >CRC</option>
                                                            <option value="HRK" >HRK</option>
                                                            <option value="CUP" >CUP</option>
                                                            <option value="CUC" >CUC</option>
                                                            <option value="ANG" >ANG</option>
                                                            <option value="CZK" >CZK</option>
                                                            <option value="DKK" >DKK</option>
                                                            <option value="DJF" >DJF</option>
                                                            <option value="DOP" >DOP</option>
                                                            <option value="EGP" >EGP</option>
                                                            <option value="SVC" >SVC</option>
                                                            <option value="ERN" >ERN</option>
                                                            <option value="ETB" >ETB</option>
                                                            <option value="FKP" >FKP</option>
                                                            <option value="FJD" >FJD</option>
                                                            <option value="XPF" >XPF</option>
                                                            <option value="GMD" >GMD</option>
                                                            <option value="GEL" >GEL</option>
                                                            <option value="GHS" >GHS</option>
                                                            <option value="GIP" >GIP</option>
                                                            <option value="GTQ" >GTQ</option>
                                                            <option value="GBP" >GBP</option>
                                                            <option value="GNF" >GNF</option>
                                                            <option value="GYD" >GYD</option>
                                                            <option value="HTG" >HTG</option>
                                                            <option value="HNL" >HNL</option>
                                                            <option value="HKD" >HKD</option>
                                                            <option value="HUF" >HUF</option>
                                                            <option value="ISK" >ISK</option>
                                                            <option value="IDR" >IDR</option>
                                                            <option value="XDR" >XDR</option>
                                                            <option value="IRR" >IRR</option>
                                                            <option value="IQD" >IQD</option>
                                                            <option value="ILS" >ILS</option>
                                                            <option value="JMD" >JMD</option>
                                                            <option value="JPY" >JPY</option>
                                                            <option value="JOD" >JOD</option>
                                                            <option value="KZT" >KZT</option>
                                                            <option value="KES" >KES</option>
                                                            <option value="KPW" >KPW</option>
                                                            <option value="KRW" >KRW</option>
                                                            <option value="KWD" >KWD</option>
                                                            <option value="KGS" >KGS</option>
                                                            <option value="LAK" >LAK</option>
                                                            <option value="LBP" >LBP</option>
                                                            <option value="LSL" >LSL</option>
                                                            <option value="ZAR" >ZAR</option>
                                                            <option value="LRD" >LRD</option>
                                                            <option value="LYD" >LYD</option>
                                                            <option value="CHF" >CHF</option>
                                                            <option value="MOP" >MOP</option>
                                                            <option value="MKD" >MKD</option>
                                                            <option value="MGA" >MGA</option>
                                                            <option value="MWK" >MWK</option>
                                                            <option value="MYR" >MYR</option>
                                                            <option value="MVR" >MVR</option>
                                                            <option value="MRU" >MRU</option>
                                                            <option value="MUR" >MUR</option>
                                                            <option value="XUA" >XUA</option>
                                                            <option value="MXN" >MXN</option>
                                                            <option value="MXV" >MXV</option>
                                                            <option value="MDL" >MDL</option>
                                                            <option value="MNT" >MNT</option>
                                                            <option value="MAD" >MAD</option>
                                                            <option value="MZN" >MZN</option>
                                                            <option value="MMK" >MMK</option>
                                                            <option value="NAD" >NAD</option>
                                                            <option value="NPR" >NPR</option>
                                                            <option value="NIO" >NIO</option>
                                                            <option value="NGN" >NGN</option>
                                                            <option value="OMR" >OMR</option>
                                                            <option value="PKR" >PKR</option>
                                                            <option value="PAB" >PAB</option>
                                                            <option value="PGK" >PGK</option>
                                                            <option value="PYG" >PYG</option>
                                                            <option value="PEN" >PEN</option>
                                                            <option value="PHP" >PHP</option>
                                                            <option value="PLN" >PLN</option>
                                                            <option value="QAR" >QAR</option>
                                                            <option value="RON" >RON</option>
                                                            <option value="RUB" >RUB</option>
                                                            <option value="RWF" >RWF</option>
                                                            <option value="SHP" >SHP</option>
                                                            <option value="WST" >WST</option>
                                                            <option value="STN" >STN</option>
                                                            <option value="SAR" >SAR</option>
                                                            <option value="RSD" >RSD</option>
                                                            <option value="SCR" >SCR</option>
                                                            <option value="SLL" >SLL</option>
                                                            <option value="SGD" >SGD</option>
                                                            <option value="XSU" >XSU</option>
                                                            <option value="SBD" >SBD</option>
                                                            <option value="SOS" >SOS</option>
                                                            <option value="SSP" >SSP</option>
                                                            <option value="LKR" >LKR</option>
                                                            <option value="SDG" >SDG</option>
                                                            <option value="SRD" >SRD</option>
                                                            <option value="SZL" >SZL</option>
                                                            <option value="SEK" >SEK</option>
                                                            <option value="CHE" >CHE</option>
                                                            <option value="CHW" >CHW</option>
                                                            <option value="SYP" >SYP</option>
                                                            <option value="TWD" >TWD</option>
                                                            <option value="TJS" >TJS</option>
                                                            <option value="TZS" >TZS</option>
                                                            <option value="THB" >THB</option>
                                                            <option value="TOP" >TOP</option>
                                                            <option value="TTD" >TTD</option>
                                                            <option value="TND" >TND</option>
                                                            <option value="TRY" >TRY</option>
                                                            <option value="TMT" >TMT</option>
                                                            <option value="UGX" >UGX</option>
                                                            <option value="UAH" >UAH</option>
                                                            <option value="AED" >AED</option>
                                                            <option value="USN" >USN</option>
                                                            <option value="UYU" >UYU</option>
                                                            <option value="UYI" >UYI</option>
                                                            <option value="UYW" >UYW</option>
                                                            <option value="UZS" >UZS</option>
                                                            <option value="VUV" >VUV</option>
                                                            <option value="VES" >VES</option>
                                                            <option value="VND" >VND</option>
                                                            <option value="YER" >YER</option>
                                                            <option value="ZMW" >ZMW</option>
                                                            <option value="ZWL" >ZWL</option>
                                                            <option value="XBA" >XBA</option>
                                                            <option value="XBB" >XBB</option>
                                                            <option value="XBC" >XBC</option>
                                                            <option value="XBD" >XBD</option>
                                                            <option value="XTS" >XTS</option>
                                                            <option value="XXX" >XXX</option>
                                                            <option value="XAU" >XAU</option>
                                                            <option value="XPD" >XPD</option>
                                                            <option value="XPT" >XPT</option>
                                                            <option value="XAG" >XAG</option>
                                                    </select>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Tax</div>
                        <div className="panel-body">
                            <select className="form-control" name="fields[tax]">
                            <option value="%">% Tax</option>
                            <option value="1">Flat Tax</option>
                            <option value="0">Off</option>
                        </select>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Shipping</div>
                        <div className="panel-body">
                            <select className="form-control" name="fields[shipping]">
                            <option value="1">On</option>
                            <option value="0">Off</option>
                        </select>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Discounts</div>
                        <div className="panel-body">
                            <select className="form-control" name="fields[discounts]">
                            <option value="%">% Discount</option>
                            <option value="1">Flat Discount</option>
                            <option value="0">Off</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="papers">
                    <div className="invoice">
                        <div className="two-col clearfix">
                            <div className="title">
                                <input type="text" className="form-control input-label" name="header" value="INVOICE" />
                                <div className="subtitle">
                                    <div className="input-group">
                                        <span className="input-group-text">#</span>
                                        <input className="form-control" type="text" name="number" />
                                    </div>
                                </div>
                            </div>



                            <div className="placeholder " ng-hide="document.logo">
						  		<div className="main btn-success"><svg className="svg-inline--fa fa-plus " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg> Add Your Logo</div>
                                 
                            </div>
                            <input type= "file" />

<div className="two-container1">
                        
                            <div className="col">
                                <div className="contact from">
                                    <div className="field">
                                        <input type="text" className="input-label form-control" name="from_title" value="From" />
                                    </div>
                                    <div className="value">
                                        <textarea className="form-control" placeholder="Who is this invoice from?" name="from"></textarea>
                                    </div>
                                </div>

                                <div className="contact to">
                                    <div className="field">
                                        <input type="text" className="input-label form-control" name="to_title" value="Bill To" />
                                    </div>
                                    <div className="value">
                                        <textarea className="form-control" placeholder="Who is this invoice to?" name="to"></textarea>
                                    </div>
                                </div>

                                <div className="contact to">
                                    <div className="field">
                                        <input type="text" className="input-label form-control" name="to_title" value="Ship To" />
                                    </div>
                                    <div className="value">
                                        <textarea className="form-control" placeholder="Who is this invoice to?" name="to"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="input-group addon-input">
                                    <input className="input-label form-control" type="text" name="date_title" value="Date" />
                                    <div className="input-group-addon">
                                        <input id="invoiceDate" className="form-control datepicker" type="text" name="date"  />
                                    </div>
                                </div>

                                <div className="input-group addon-input">
                                    <input className="input-label form-control" type="text" name="date_title" value="Payment Terms" />
                                    <div className="input-group-addon">
                                        <input id="invoiceDate" className="form-control datepicker" type="text" name="date" />
                                    </div>
                                </div>

                                <div className="input-group addon-input">
                                    <input className="input-label form-control" type="text" name="due_date_title" value="Due Date" />
                                    <div className="input-group-addon">
                                        <input id="invoiceDueDate" className="form-control datepicker" type="text" name="due_date" />
                                    </div>
                                </div>

                                <div className="input-group addon-input">
                                    <input className="input-label form-control" type="text" name="due_date_title" value="Po Number" />
                                    <div className="input-group-addon">
                                        <input id="invoiceDueDate" className="form-control datepicker" type="text" name="due_date" />
                                    </div>
                                </div>

                                <div className="input-group addon-input highlight">
                                    <input className="input-label form-control" type="text" name="balance_title" value="Balance" />
                                    <div className="input-group-addon value"><span className="currency-symbol">$</span>0</div>
                                </div>
                            </div>

                            </div>

                        </div>

                        <div className="items-holder">
                            <div className="items-table-header">
                                <div className="amount">
                                    <div className="field bordered">
                                        <input type="text" className="input-label form-control" value="Amount" name="amount_header" />
                                    </div>
                                </div>
                                <div className="unit_cost">
                                    <div className="field bordered">
                                        <input type="text" className="input-label form-control" value="Rate" name="unit_cost_header" />
                                    </div>
                                </div>
                                <div className="quantity">
                                    <div className="field bordered">
                                        <input type="text" className="input-label form-control" value="Quantity" name="quantity_header" />
                                    </div>
                                </div>
                                <div className="name">
                                    <div className="field bordered">
                                        <input type="text" className="input-label form-control" value="Description" name="item_header" />
                                    </div>
                                </div>
                            </div>
                             </div>
                                        
                            <div className="items-table">
                             
                         <button className="btn-success" onClick={()=>handleAdd()}>Line Item</button>
                {val.map((data,i)=>{
                    return(
                        
                       <div value={data} onChange={e=>handleChange(e,i)}>
                       <div className="item-row" >
                       <div className="main-row" >
                           <div className="delete"></div>
                           <div className="amount value" >
                               <span className="currency-symbol">USD $</span>0.00
                           </div>
        
                           <div className="unit_cost">
                               <div className="input-group">
                                   <span className="input-group-text currency-sign">$</span>
                                   <input className="item-calc form-control" type="number" step="any" autocomplete="off" name="items[0][unit_cost]" value="0" />
                               </div>
                           </div>
                           <div className="quantity">
                               <input type="number" step="any" className="item-calc form-control" autocomplete="off" name="items[0][quantity]" value="0" />
                           </div>
                           <div className="name">
                               <textarea className="item-calc form-control" rows="1" name="items[0][name]" placeholder="Description of item/service..."></textarea>
                           </div>
                       </div>
                   </div>

                   {val.length!==1 &&
                   <button onClick={()=>handleDelete(i)}>x</button>}
                       </div>
                       
                    )
                })}
                </div>  
                                    
                      
<div className="two-container">


                       <div className="two-col clearfix">
                        <div className="col footer">
                            <div className="notes-holder">
                                <div className="field">
                                    <input className="input-label form-control ng-pristine ng-untouched ng-valid" ng-model="document.notes_title" tabindex="1014"/>
                                </div>
                                <div className="value">
                                    <div className="expandingText"><textarea className="notes form-control ng-pristine ng-untouched ng-valid expanding-init" placeholder="Notes - any relevant information not already covered" ng-model="document.notes" tabindex="1015" expanding-textarea=""></textarea><pre className="textareaClone"><div> </div></pre></div>
                                </div>
                            </div>
                            <div className="terms-holder">
                                <div className="field">
                                    <input className="input-label form-control ng-pristine ng-untouched ng-valid" ng-model="document.terms_title" tabindex="1016"/>
                                </div>
                                <div className="value">
                                    <div className="expandingText"><textarea className="terms form-control ng-pristine ng-untouched ng-valid expanding-init" placeholder="Terms and conditions - late fees, payment methods, delivery schedule" ng-model="document.terms" tabindex="1017" expanding-textarea=""></textarea><pre className="textareaClone"><div> </div></pre></div>
                                </div>
                            </div>
                        </div>
                        
                            </div>


                            <div className="two-col clearfix">
                                                    <div className="col col-offset">
                                
                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="subtotal_title" value="Subtotal" />
                                        <div className="input-group-addon value"><span className="currency-symbol">USD $</span>0.00</div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="discounts_title" value="Discounts" />
                                        <div className="input-group-addon">
                                            <input type="text" className="form-control" name="discounts" value="0" />
                                        </div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="tax_title" value="Tax" />
                                        <div className="input-group-addon">
                                            <input type="text" className="form-control" name="tax" value="0" />
                                        </div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="shipping_title" value="Shipping" />
                                        <div className="input-group-addon">
                                            <div className="input-group">
                                                <span className="input-group-text currency-sign">$</span>
                                                <input type="text" className="form-control" name="shipping" value="0" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="total_title" value="Total" />
                                        <div className="input-group-addon value"><span className="currency-symbol">$</span>0</div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="amount_paid_title" value="Amount Paid" />
                                        <div className="input-group-addon">
                                            <div className="input-group">
                                                <span className="input-group-text currency-sign">$</span>
                                                <input type="text" className="form-control" name="amount_paid" value="0" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group addon-input">
                                        <input className="input-label form-control" type="text" name="total_title" value="Balance Due" />
                                        <div className="input-group-addon value"><span className="currency-symbol">$</span>0</div>
                                    </div>
                                </div>
                            </div>

                            
                      </div>
                        
                         </div>
                     </div>
                </form>
            </div>    
        </div>
     </>
    )
}

export default Invoice