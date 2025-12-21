import React from "react";
import { Link } from "react-router-dom";

function Brojkerage() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>
            Charges for account opening
          </h2>
          <table
            class="table table-striped table-bordered table-container"
            style={{ marginBottom: "100px" }}
          >
            <thead>
              <tr>
                <th scope="col" className="text-muted">
                  Types of account
                </th>
                <th
                  scope="col"
                  className="text-muted"
                  style={{ width: "250px", textAlign: "center" }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td style={{ width: "250px", textAlign: "center" }}>Free</td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td style={{ width: "250px", textAlign: "center" }}>Free</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td style={{ width: "250px", textAlign: "center" }}>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td style={{ width: "250px", textAlign: "center" }}>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div>
          <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>
            Demat AMC (Annual Maintenance Charge){" "}
          </h2>
          <table class="table table-striped table-bordered table-container">
            <thead>
              <tr>
                <th scope="col" className="text-muted">
                  Value of holdings
                </th>
                <th
                  scope="col"
                  className="text-muted"
                  style={{ width: "850px" }}
                >
                  AMC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "14px", marginBottom: "70px" }}>
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA,
            <br />{" "}
            <Link to="/support" style={{ textDecoration: "none" }}>
              click here
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div>
          <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>
            Charges for optional value added services
          </h2>
          <table
            class="table table-striped table-bordered"
            style={{ marginBottom: "50px" }}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-muted"
                  style={{ width: "300px" }}
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="text-muted"
                  style={{ width: "400px" }}
                >
                  Billing Frquency
                </th>
                <th scope="col" className="text-muted">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect </td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <h1 className="fs-4 px-5">Charges explained</h1>
        <div className="col-6 p-5">
          <p className="fs-5 mb-4">Securities/Commodities transaction tax</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-5 mb-4">Transaction/Turnover Charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br /> BSE has revised transaction charges in XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have
            been merged into a new group X w.e.f 01.12.2017)
            <br /> BSE has revised transaction charges in SS and ST groups to
            ₹1,00,000 per crore of gross turnover.
            <br /> BSE has revised transaction charges for group A, B and other
            non exclusive scrips (non-exclusive scrips from group E, F, FC, G,
            GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross turnover.
          </p>
          <p className="fs-5 mb-4">Call & trade</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <p className="fs-5 mb-4">Stamp charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <p className="fs-5 mb-4">NRI brokerage charges</p>
          <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <li>
              <p>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </p>
            </li>
          </ul>
          <p className="fs-5 mb-4">Account with debit balance</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <p className="fs-5 mb-4">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </p>
          <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <li>
              <p>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </p>
            </li>
            <li>
              <p>Options - ₹50 per crore + GST traded value (premium value).</p>
            </li>
            <li>
              <p>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </p>
            </li>
          </ul>
          <p className="fs-5 mb-4">Margin Trading Facility (MTF)</p>
          <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <li>
              <p>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </p>
            </li>
            <li>
              <p>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </p>
            </li>
            <li>
              <p>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <p className="fs-5 mb-4 mt-5">GST</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <p className="fs-5 mb-4">SEBI Charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <p className="fs-5 mb-4">DP (Depository participant) charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
            <br /> Female demat account holders (as first holder) will enjoy a
            discount of ₹0.25 per transaction on the CDSL fee.
            <br /> Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p className="fs-5 mb-4">Pledging charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <p className="fs-5 mb-4">AMC (Account maintenance charges)</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, <Link to="/support" style={{textDecoration:"none"}}>Click here</Link>
            <br /> For non-BSDA demat accounts: ₹300/year + 18% GST charged
            quarterly (90 days). To learn more about AMC,{" "}
            <Link to="/support" style={{ textDecoration: "none" }}>
              Click here
            </Link>
          </p>
          <p className="fs-5 mb-4">Corporate action order charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <p className="fs-5 mb-4">Off-market transfer charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            ₹25 per transaction.
          </p>
          <p className="fs-5 mb-4">Physical CMR request</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <p className="fs-5 mb-4">Payment gateway charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <p className="fs-5 mb-4">Delayed Payment Charges</p>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
            <Link to="/support" style={{ textDecoration: "none" }}>
              Learn more
            </Link>
          </p>
          <p className="fs-5 mb-4">
            Trading using 3-in-1 account with block functionality
          </p>
          <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <li>
              <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
            </li>
            <li>
              <p>Intraday Brokerage: 0.05% per executed order.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mx-5 mb-5"> 
        <p style={{fontSize:"20px"}}>Disclaimer</p>
        <p style={{fontSize:"14px", lineHeight:"1.5"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.<br/> Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and<br/> assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br/>brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1%<br/> will be charged.</p>
      </div>
    </div>
  );
}

export default Brojkerage;
