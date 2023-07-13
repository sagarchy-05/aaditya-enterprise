'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setWidth(window.innerWidth);
  //   });

  //   return () => {
  //     window.removeEventListener('resize', () => {});
  //   };
  // }, []);

  const [width, setWidth] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      handleResize(); // Set initial width on component mount
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const [mobNavMenu, setMenu] = useState(false);
  return (
    <>
      {mobNavMenu && (
        <div id='MobNav'>
          <img
            onClick={() => {
              setMenu(false);
            }}
            className='closeMenu'
            src='/icon-close-menu.svg'
            alt='menu-close'
          />
          <ul>
            <li>
              <Link href='#'>About</Link>
              <img src='/icon-arrow-down.svg' alt='arrow-down' />
              <ul id='prim-drop'>
                <li>
                  <img
                    className='back-arrow'
                    src='/back-arrow.png'
                    alt='back-arrow'
                  />
                </li>
                <li>
                  <Link
                    href='/About/AboutUs'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/About/OurTeam'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href='/Services'
                onClick={() => {
                  setMenu(false);
                }}
              >
                Services
              </Link>
              <img src='/icon-arrow-down.svg' alt='arrow-down' />
              <ul id='prim-drop'>
                <li>
                  <img
                    className='back-arrow'
                    src='/back-arrow.png'
                    alt='back-arrow'
                  />
                </li>
                <li>
                  <Link
                    href='/Services/3PLWarehousingManagementServices'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    3PL Warehouse Management Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Services/LastMileDeliveryServices'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Last Mile Delivery Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Services/DigitalMarkettingServicess'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Digital Marketting Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Services/DataEntry'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Data Entry
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/CopyPasteService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Copy Paste Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DatabaseDataEntry'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Database Data Entry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DatabaseDevelopmentMigration'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Database Development Migration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DataCapture'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Capture
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DataEntryBusinessServeys'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        DataEntry Business Serveys
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DataEntryEnrolment'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        DataEntry Enrolment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DataExtraction'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Extraction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DocumentDataEntry'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Document DataEntry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/DocumentManagement'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Document Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/ImagaDataEntry'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Image Data Entry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/InsuranceClaims'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Insurance Claims
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/InternetDataInput'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Internet DataInput
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/LegalDocuments'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Legal Documents
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/MailingList'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Mailing List
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/NumericTest'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Numeric Test
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/OfflineDataEntryServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Offline DataEntry Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/OffshoreDataEntry'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Offshore Data Entry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/Product Registration'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Product Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/RestaurantMenu'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Restaurant Menu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DataEntry/Website Data Entry'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        WebsiteDataEntry
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/BackOfficeOutshoringServices'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Back Office Outshoring Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Services/ContactCentre'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Contact Centre
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/InboundCustomerService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Inbound Customer Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/InboundSalesLeadConversionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Inbound Sales Lead Conversion Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/InboundTechnicalSupportServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Inbound Technical Support Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/MissedCallBackService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Missed Call Back Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/OrderTakingService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Order Taking Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/AppointmentShedulingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        AppointmentShedulingServices
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/CharityFundRaisingService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        CharityFund Raising Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/CrossSellingUpSellingService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Cross Selling Up Selling Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/DebtCollectionService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        DebtCollectionService
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/OutboundCallBroadcastingService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        OutboundCallBroadcastingService
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/OutboundSurvey'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        OutboundSurvey
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/SoftLeadGeneration'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        SoftLead Generation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/ContactCentre/CustomerServiceSupport'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Customer Service Support
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/DocumentsDigitization'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Documents Digitization
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/OCRCleanupService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        OCR Cleanup Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/DocumentScanningService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Document Scanning Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/CheckProcessingService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Check Processing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/DataAbstractionService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Abstraction Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/DataCleaningService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Cleaning Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/DataDeduplicationService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Deduplication Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/FormsProcessingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Forms Processing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/ImageProcessingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Image Processing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/InsuranceClaimsProcessingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Insurance Claims Processing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/DocumentScanningService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        DocumentScanningService
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/MailingListCompilationServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        MailingList Compilation Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/MarketResearchFormsServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Market Research Forms Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/SurveyProcessingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        SurveyProcessingServices
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/DocumentsDigitization/TransactionProcessingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Transaction Processing Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/DocumentManagementServices'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Document Management Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Services/WebDataEnabled'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Web / Data Enabled
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/DataConversionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Data Conversion Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/EmailServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Email Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/FileConversionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        File Conversion Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/HTMLConversionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        HTML Conversion Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/LiveChatSupportServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Live Chat Support Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/PDFConverisonServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        PDF Converison Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/SMSBroadcastingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        SMS Broadcasting Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/WebDataEnabled/XMLConverisonServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        XML Converison Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/FieldVerificationservice'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Field verification Service
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/FieldVerificationService/AccountsReceivableServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Accounts Receivable Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/FieldVerificationService/CustomerRetentionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Customer Retention Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/FieldVerificationService/DebtCollectionServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Debt Collection Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/SoftwareDevelopmentService'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Software Development Service
                  </Link>
                  <img
                    className='nextArrow'
                    src='/next.png'
                    alt='arrow-right'
                  />
                  <ul id='m-sec-drop'>
                    <li>
                      <img
                        className='back-arrow'
                        src='/back-arrow.png'
                        alt='back-arrow'
                      />
                    </li>
                    <li>
                      <Link
                        href='/Services/SoftwareDevelopmentService/ApplicationMigrationServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Application Migration Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/SoftwareDevelopmentService/MobileAppDevelopmentServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Mobile App Development Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/SoftwareDevelopmentService/SoftwareTestingServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Software Testing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/SoftwareDevelopmentService/WebsiteDesigningService'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Website Designing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/Services/SoftwareDevelopmentService/WebsiteDevelopmentServices'
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        Website Development Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/Services/HR&PayrollServices'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    HR & Payroll Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='#'>Process</Link>
              <img src='/icon-arrow-down.svg' alt='arrow-down' />
              <ul id='prim-drop'>
                <li>
                  <img
                    className='back-arrow'
                    src='/back-arrow.png'
                    alt='back-arrow'
                  />
                </li>
                <li>
                  <Link
                    href='/Process/HowWeWork'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Process/OurProcess'
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Our Process
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href='/Clientele'
                onClick={() => {
                  setMenu(false);
                }}
              >
                Clientele
              </Link>
            </li>
            {/* <li>
              <Link href='/InvestorsRelations'>Investors Relations</Link>
            </li> */}
            <li>
              <Link
                href='/ContactUs'
                onClick={() => {
                  setMenu(false);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
      <header>
        <div id='topLine'>
          <div id='topLeft'>
            <div className='topLeftItem'>
              <img src='/telephone.png' alt='telephone' />
              <Link href='tel:+1800229933'>
                <h6>+91 9339755674</h6>
              </Link>
            </div>
            <div className='topLeftItem'>
              <img src='/mail.png' alt='mail' />
              <Link href='mailto:souravshaw@gmail.com'>
                <h6>souravshaw@gmail.com</h6>
              </Link>
            </div>
          </div>
          <div id='topRight'>
            <Link className='topRight' href='/ContactUs'>
              <img src='/speech-bubble.png' alt='contact' />
              <h6>Contact Us</h6>
            </Link>
          </div>
        </div>
        <nav id='Navbar'>
          <div id='navLeft'>
            <Link href='/'>
              <img src='/ae-icon.jpeg' alt='Logo' />
            </Link>
          </div>
          {/* for desktop */}
          {width > 1020 && (
            <div id='navRight'>
              <ul>
                <li>
                  About
                  <img src='/icon-arrow-down.svg' alt='arrow-down' />
                  <ul id='prim-drop'>
                    <li>
                      <Link href='/About/AboutUs'>About Us</Link>
                    </li>
                    <li>
                      <Link href='/About/OurTeam'>Our Team</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/Services'>Services</Link>
                  <img src='/icon-arrow-down.svg' alt='arrow-down' />
                  <ul id='prim-drop'>
                    <li>
                      <Link href='/Services/3PLWarehousingManagementServices'>
                        3PL Warehouse Management Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/Services/LastMileDeliveryServices'>
                        Last Mile Delivery Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/Services/DigitalMarkettingServicess'>
                        Digital Marketting Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/Services/DataEntry'>Data Entry</Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/DataEntry/CopyPasteService'>
                            Copy Paste Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DatabaseDataEntry'>
                            Database Data Entry
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DatabaseDevelopmentMigration'>
                            Database Development Migration
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DataCapture'>
                            Data Capture
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DataEntryBusinessServeys'>
                            DataEntry Business Serveys
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DataEntryEnrolment'>
                            DataEntry Enrolment
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DataExtraction'>
                            Data Extraction
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DocumentDataEntry'>
                            Document DataEntry
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/DocumentManagement'>
                            Document Management
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/ImagaDataEntry'>
                            Image Data Entry
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/InsuranceClaims'>
                            Insurance Claims
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/InternetDataInput'>
                            Internet DataInput
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/LegalDocuments'>
                            Legal Documents
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/MailingList'>
                            Mailing List
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/NumericTest'>
                            Numeric Test
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/OfflineDataEntryServices'>
                            Offline DataEntry Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/OffshoreDataEntry'>
                            Offshore Data Entry
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/Product Registration'>
                            Product Registration
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/RestaurantMenu'>
                            Restaurant Menu
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DataEntry/Website Data Entry'>
                            WebsiteDataEntry
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/BackOfficeOutshoringServices'>
                        Back Office Outshoring Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/Services/ContactCentre'>Contact Centre</Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/ContactCentre/InboundCustomerService'>
                            Inbound Customer Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/InboundSalesLeadConversionServices'>
                            Inbound Sales Lead Conversion Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/InboundTechnicalSupportServices'>
                            Inbound Technical Support Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/MissedCallBackService'>
                            Missed Call Back Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/OrderTakingService'>
                            Order Taking Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/AppointmentShedulingServices'>
                            AppointmentShedulingServices
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/CharityFundRaisingService'>
                            CharityFund Raising Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/CrossSellingUpSellingService'>
                            Cross Selling Up Selling Service
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/DebtCollectionService'>
                            DebtCollectionService
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/OutboundCallBroadcastingService'>
                            OutboundCallBroadcastingService
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/OutboundSurvey'>
                            OutboundSurvey
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/SoftLeadGeneration'>
                            SoftLead Generation
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/ContactCentre/CustomerServiceSupport'>
                            Customer Service Support
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/DocumentsDigitization'>
                        Documents Digitization
                      </Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/DocumentsDigitization/OCRCleanupService'>
                            OCR Cleanup Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/DocumentScanningService'>
                            Document Scanning Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/CheckProcessingService'>
                            Check Processing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/DataAbstractionService'>
                            Data Abstraction Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/DataCleaningService'>
                            Data Cleaning Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/DataDeduplicationService'>
                            Data Deduplication Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/FormsProcessingServices'>
                            Forms Processing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/ImageProcessingServices'>
                            Image Processing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/InsuranceClaimsProcessingServices'>
                            Insurance Claims Processing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/DocumentScanningService'>
                            DocumentScanningService
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/MailingListCompilationServices'>
                            MailingList Compilation Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/MarketResearchFormsServices'>
                            Market Research Forms Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/SurveyProcessingServices'>
                            SurveyProcessingServices
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/DocumentsDigitization/TransactionProcessingServices'>
                            Transaction Processing Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/DocumentManagementServices'>
                        Document Management Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/Services/WebDataEnabled'>
                        Web / Data Enabled
                      </Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/WebDataEnabled/DataConversionServices'>
                            Data Conversion Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/EmailServices'>
                            Email Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/FileConversionServices'>
                            File Conversion Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/HTMLConversionServices'>
                            HTML Conversion Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/LiveChatSupportServices'>
                            Live Chat Support Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/PDFConverisonServices'>
                            PDF Converison Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/SMSBroadcastingServices'>
                            SMS Broadcasting Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/WebDataEnabled/XMLConverisonServices'>
                            XML Converison Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/FieldVerificationservice'>
                        Field verification Service
                      </Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/FieldVerificationService/AccountsReceivableServices'>
                            Accounts Receivable Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/FieldVerificationService/CustomerRetentionServices'>
                            Customer Retention Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/FieldVerificationService/DebtCollectionServices'>
                            Debt Collection Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/SoftwareDevelopmentService'>
                        Software Development Service
                      </Link>
                      <img
                        className='nextArrow'
                        src='/next.png'
                        alt='arrow-right'
                      />
                      <ul id='sec-drop'>
                        <li>
                          <Link href='/Services/SoftwareDevelopmentService/ApplicationMigrationServices'>
                            Application Migration Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/SoftwareDevelopmentService/MobileAppDevelopmentServices'>
                            Mobile App Development Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/SoftwareDevelopmentService/SoftwareTestingServices'>
                            Software Testing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/SoftwareDevelopmentService/WebsiteDesigningService'>
                            Website Designing Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/Services/SoftwareDevelopmentService/WebsiteDevelopmentServices'>
                            Website Development Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/Services/HR&PayrollServices'>
                        HR & Payroll Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='#'>Process</Link>
                  <img src='/icon-arrow-down.svg' alt='arrow-down' />
                  <ul id='prim-drop'>
                    <li>
                      <Link href='/Process/HowWeWork'>How We Work</Link>
                    </li>
                    <li>
                      <Link href='/Process/OurProcess'>Our Process</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/Clientele'>Clientele</Link>
                </li>
                {/* <li>
                  <Link href='/InvestorsRelations'>Investors Relations</Link>
                </li> */}
                <li>
                  <Link href='/ContactUs'>Contact Us</Link>
                </li>
                <li>
                  <div id='icons'>
                    <img src='/linkedin.svg' alt='linkedin' />
                    <img src='/facebook.svg' alt='facebook' />
                    <img src='/twitter.svg' alt='twitter' />
                    <img src='/pinterest.svg' alt='pinterest' />
                    <img src='/instagram.svg' alt='instagram' />
                  </div>
                </li>
              </ul>
            </div>
          )}
          {/* For mobile  */}
          {width <= 1020 && (
            <div
              id='mbNav'
              onClick={() => {
                setMenu(true);
              }}
            >
              <img src='/icon-menu.svg' alt='icon-menu' />
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
