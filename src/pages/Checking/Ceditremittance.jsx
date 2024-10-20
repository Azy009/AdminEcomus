import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Group 40.png';
import img2 from '../../assets/Group 41.png';
import img3 from '../../assets/asdfg.png';
import img4 from "../../assets/abc.png";
import img5 from "../../assets/cba.png";
import { BsQuestionLg } from "react-icons/bs";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { gettoken } from '../../Localstorage/Store';
import Loadercomp from '../../components/Loadercomp';
import ReactImageMagnify from 'react-image-magnify';
import { getName } from 'country-list';

const Ceditremittance = () => {




    const nvg = useNavigate()
    const {id} = useParams()
    const [errorcls, seterrorcls] = useState({});
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [photograph, setphotograph] = useState("");
    const [mobile_no, setmobile_no] = useState();
    const [gender, setgender] = useState();
    const [emailID, setemailID] = useState();
    const [company, setcompany] = useState();
    const [location, setlocation] = useState();
    const [address, setaddress] = useState();
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [dob, setdob] = useState();
    const [age, setage] = useState();
    const [pselect, setpselect] = useState();
    const [transtion, settranstion] = useState();
    const [photo, setphoto] = useState();
    const [thumbimg2, setthumbimg2] = useState('');
    const [rifimg2, setrifimg2] = useState('');
    const [rmfimg2, setrmfimg2] = useState('');
    const [rrfimg2, setrrfimg2] = useState('');
    const [rlfimg2, setrlfimg2] = useState('');
    const [ltfimg2, setltfimg2] = useState('');
    const [lifimg2, setlifimg2] = useState('');
    const [lmfimg2, setlmfimg2] = useState('');
    const [lrfimg2, setlrfimg2] = useState('');
    const [llfimg2, setllfimg2] = useState('');




    const [cthumbimg2, setcthumbimg2] = useState('');
    const [crifimg2, setcrifimg2] = useState('');
    const [crmfimg2, setcrmfimg2] = useState('');
    const [crrfimg2, setcrrfimg2] = useState('');
    const [crlfimg2, setcrlfimg2] = useState('');
    const [cltfimg2, setcltfimg2] = useState('');
    const [clifimg2, setclifimg2] = useState('');
    const [clmfimg2, setclmfimg2] = useState('');
    const [clrfimg2, setclrfimg2] = useState('');
    const [cllfimg2, setcllfimg2] = useState('');


    const [aadhaarImage, setaadhaarImage] = useState('');
    const [documentimagebacktwo, setdocumentimagebacktwo] = useState('');

    const [thumbimg3, setthumbimg3] = useState('');
    const [rifimg3, setrifimg3] = useState('');
    const [rmfimg3, setrmfimg3] = useState('');
    const [rrfimg3, setrrfimg3] = useState('');
    const [rlfimg3, setrlfimg3] = useState('');
    const [ltfimg3, setltfimg3] = useState('');
    const [lifimg3, setlifimg3] = useState('');
    const [lmfimg3, setlmfimg3] = useState('');
    const [lrfimg3, setlrfimg3] = useState('');
    const [llfimg3, setllfimg3] = useState('');
    const [pincode, setpincode] = useState();
    const [fnamecheck, setfnamecheck] = useState(false);
    const [lnamecheck, setlnamecheck] = useState(false);
    const [photographcheck, setphotographcheck] = useState(false);
    const [aadhar, setaadhar] = useState(false);
    const [biomcheck, setbiomcheck] = useState(false);
    const [mobile_nocheck, setmobile_nocheck] = useState(false);
    const [gendercheck, setgendercheck] = useState(false);
    const [emailIDcheck, setemailIDcheck] = useState(false);
    const [companycheck, setcompanycheck] = useState(false);
    const [locationcheck, setlocationcheck] = useState(false);
    const [addresscheck, setaddresscheck] = useState(false);
    const [countrycheck, setcountrycheck] = useState(false);
    const [statecheck, setstatecheck] = useState(false);
    const [citycheck, setcitycheck] = useState(false);
    const [dobcheck, setdobcheck] = useState(false);
    const [pincodecheck, setpincodecheck] = useState(false);
    const [pselectcheck, setpselectcheck] = useState(false);
    const [transtioncheck, settranstioncheck] = useState(false);
    const [photocheck, setphotocheck] = useState(false);
    const [productbioheck, setproductbioheck] = useState(false);
    const [srtloader, setsrtloader] = useState(true);
    const [loader, setloader] = useState(false);
    const [documenttype, setdocumenttype] = useState('PAN');
    const [idnumber, setidnumber] = useState('DTTPA8683J');
    const [documentimage, setdocumentimage] = useState('ASD');
    const [documentissue, setdocumentissue] = useState('SD');
    const [documentexpiry, setdocumentexpiry] = useState('ASD');
    const [documenterror, setdocumenterror] = useState(false);
    const [kycphoto, setkycphoto] = useState('');
    const [kycfullname, setkycfullname] = useState('ajay singh');
    const [kycage, setkycage] = useState('34');
    const [kycfathername, setkycfathername] = useState('mohan lal');
    const [kycgander, setkycgander] = useState('male');
    const [kycdob, setkycdob] = useState('23-04-3494');
    const [kycaddress, setkycaddress] = useState('rz-58 a3-block dharampura najfgarh');
    const [kyccountry, setkyccountry] = useState('in');
    const [kycstate, setkycstate] = useState('delhi');
    const [kyccity, setkyccity] = useState('najfgarh');
    const [kycpincode, setkycpincode] = useState('110043');
    const [kycemail, setkycemail] = useState('ay6049@gmail.com');
    const [kycphone, setkycphone] = useState('3948384934');
    const [kycphonecode, setkycphonecode] = useState('');
    const [crtdate, setcrtdate] = useState('');
    const [idno, setidno] = useState(0);
    const [documenterrorres, setdocumenterrorres] = useState(false);
    const [documentloader, setdocumentloader] = useState(false);
    const [documentgrandres, setdocumentgrandres] = useState({});
    const [documentgranderror, setdocumentgranderror] = useState({});
    const [documentsuperres, setdocumentsuperres] = useState('SUCCESS');
    const [documentsupermsg, setdocumentsupermsg] = useState('');
    const [cusage, setcusage] = useState();
    const gettokinval = gettoken();
  // fetch user details ----->
    useEffect(() => {
      async function fetchOne() {
  
        const config = {
          headers: {
            Authorization: `Bearer ${gettokinval.access}`,
          },
        };
        let url = `${process.env.REACT_APP_API_URL}api/remittance_checking/${id}/`;
        const response = await axios.get(url, config);
        setsrtloader(false)
        setaddress(response.data.customer_address)
        setemailID(response.data.customer_emailID)
        setmobile_no(response.data.customer_mobile_no)
        setlname(response.data.customer_lname)
        setfname(response.data.customer_fname)
        setcountry(response.data.customer_country)
        setstate(response.data.customer_state)
        setcity(response.data.customer_city)
        setpincode(response.data.customer_pincode)
        setcompany(response.data.customer_company)
        setlocation(response.data.customer_company_location)
        setgender(response.data.customer_gender)
        setdob(response.data.customer_dob)
        setage(response.data.customer_age)
        setphotograph(response.data.customer_photograph)
        setpselect(response.data.product)
        settranstion(response.data.transaction_no)
        setphoto(response.data.photograph)
        setidnumber(response.data.customer_document_no)
        setdocumenttype(response.data.customer_document_type)
        setdocumentexpiry(response.data.customer_doc_expiry_date)
        setdocumentissue(response.data.customer_doc_issue_date)
        setcusage(response.data.cus_age)
        setllfimg2(response.data.l_little_finger)
        setlrfimg2(response.data.l_ring_finger)
        setlmfimg2(response.data.l_middle_finger)
        setlifimg2(response.data.l_index_finger)
        setltfimg2(response.data.l_thumb)
        setrlfimg2(response.data.r_little_finger)
        setrrfimg2(response.data.r_ring_finger)
        setrmfimg2(response.data.r_middle_finger)
        setrifimg2(response.data.r_index_finger)
        setthumbimg2(response.data.r_thumb)
        setdocumentimagebacktwo(response.data.customer_docImg_back)
        setaadhaarImage(response.data.customer_docImg_front)
        setcllfimg2(response.data.customer_l_little_finger)
        setclrfimg2(response.data.customer_l_ring_finger)
        setclmfimg2(response.data.customer_l_middle_finger)
        setclifimg2(response.data.customer_l_index_finger)
        setcltfimg2(response.data.customer_l_thumb)
        setcrlfimg2(response.data.customer_r_little_finger)
        setcrrfimg2(response.data.customer_r_ring_finger)
        setcrmfimg2(response.data.customer_r_middle_finger)
        setcrifimg2(response.data.customer_r_index_finger)
        setcthumbimg2(response.data.customer_r_thumb)
        if(response.data.customer_dob !== undefined){
          const newdate = () => {
            // const num = parseInt(dateString)
             const dateParts = response.data.customer_dob.split('-');
             console.log("mmmmm",dateParts)
             const year = parseInt(dateParts[0], 10);
             const month = parseInt(dateParts[1], 10);
             const day = parseInt(dateParts[2], 10);
           
             const months = [
               'January',
               'February',
               'March',
               'April',
               'May',
               'June',
               'July',
               'August',
               'September',
               'October',
               'November',
               'December',
             ];
           
             const formattedDate = `${day} ${months[month - 1]}, ${year}`;
             setcrtdate(formattedDate)
           };
           newdate();
        }
      }
      fetchOne();
    }, []);
  // fetch user details ----->








  const documentverify = async () => {
    if(documenttype == "defualt" || documenttype == undefined || idnumber == undefined){
      setdocumenterror(true)
    }else{
      setdocumentloader(true)
      const boolenvalue = true;
      const reason = 'using this api in kfc project'
      var data = {}
      if(documenttype == "AADHAAR"){
        var inputDate = new Date(dob);
        var options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        var formattedDate = inputDate.toLocaleDateString('en-GB', options).replace(/\//g, '-'); 
        var fullname;
        if(lname != "undefined" && lname != ""){
           fullname = `${fname} ${lname}`;
        }else{
          fullname = fname;
        }
         data = {
          "document_type":documenttype,
          "aadhaar_id": parseInt(idnumber),
          "full_name": fullname.toUpperCase(),
          "dob": formattedDate,
          "gender": gender == "MALE" ? "M" : "F",
          "consent": boolenvalue,
          "consent_purpose":reason
        }
      }else{
  
  
          if(documenttype == "DRIVING_LICENSE"){
              var inputDate = new Date(dob);
              var options = { year: 'numeric' , month: 'numeric' , day: 'numeric' };
              var formattedDate = inputDate.toLocaleDateString('en-GB', options).replace(/\//g, '-'); 
               data = {

                "document_type":documenttype,
                "id_number": idnumber,
                "dob": formattedDate
              }
            }else{
              var inputDate = new Date(dob);
              var options = { year: 'numeric' , month: 'numeric' , day: 'numeric' };
              var formattedDate = inputDate.toLocaleDateString('en-GB', options).replace(/\//g, '-'); 
              data = {
    
                  "document_type":documenttype,
                  "id_number": idnumber,
                  "consent": boolenvalue,
                  "consent_purpose":reason,
                  "dob": formattedDate
                }
            }
      }
      
      try {
        const config = {
          headers: {
            accept:'application/json',
            Authorization: `Bearer ${gettokinval.access}`,
          },
        };
        let url = `${process.env.REACT_APP_API_URL}api/search/`;
        const response = await axios.post(url, data, config);
        var check = response.data.data;
        if(check){
          setdocumentloader(false)
          setdocumenterrorres(true)
          if(response.data.responseCode == "E00029"){
            setdocumentsuperres(response.data.data.kycStatus)
            setdocumentsupermsg('Error Code: CR0001. Please contact your Administrator')
          }else{
          setdocumentsuperres(response.data.data.kycStatus)
                  setdocumentsupermsg(response.data.data.message)
          }
          setidno(2)
          setTimeout(function() {
            setidno(0)
           }, 5000);
        }else{
          console.log("line number 252 ",response)
          console.log("line number 252 ",response.data)
  
          if(documenttype == "VOTERID"){
            if(response.data.kycStatus == "SUCCESS"){
  
  
              setdocumentgrandres(response.data)
              setdocumentsuperres(response.data.kycStatus)
              // setkycphoto(response.data.search.kycResult.photo)
              setkycfullname(response.data.kycResult.name)
              // setkycfathername(response.data.kycResult.fatherFullname)
              setkycdob(response.data.kycResult.dateOfBirth)
              setkycgander(response.data.kycResult.gender)
              // setkycaddress(response.data.kycResult.corresLine1)
              // setkyccountry(response.data.kycResult.corresCountry)
              setkycstate(response.data.kycResult.state)
              setkyccity(response.data.kycResult.assemblyConstituency)
              // setkycpincode(response.data.kycResult.corresPin)
              setkycemail(response.data.kycResult.emailId)
              setkycphone(response.data.kycResult.mobileNumber)
              // setkycphonecode(response.data.kycResult.mobCode)
              setkycage(response.data.kycResult.age)
              setidno(1)
              setTimeout(function() {
                setidno(0)
               }, 5000);
              setdocumentloader(false)
  
            }else{
              // error code here
  
              setdocumentsuperres(response.data.status)
              setdocumentsupermsg(response.data.error.message)
              setidno(2)
              setTimeout(function() {
                setidno(0)
               }, 5000);
              setdocumentloader(false)
            }
          }else{
            if(response.data.download.kycStatus == "SUCCESS"){
        
              setdocumentgrandres(response.data.data)
              setdocumentsuperres(response.data.download.kycStatus)
              setkycphoto(response.data.search.kycResult.photo)
              setkycfullname(response.data.download.kycResult.personalIdentifiableData.personalDetails.fullName)
              setkycfathername(response.data.download.kycResult.personalIdentifiableData.personalDetails.fatherFullname)
              setkycdob(response.data.download.kycResult.personalIdentifiableData.personalDetails.dob)
              setkycgander(response.data.download.kycResult.personalIdentifiableData.personalDetails.gender)
              setkycaddress(response.data.download.kycResult.personalIdentifiableData.personalDetails.corresLine1)
              setkyccountry(response.data.download.kycResult.personalIdentifiableData.personalDetails.corresCountry)
              setkycstate(response.data.download.kycResult.personalIdentifiableData.personalDetails.corresState)
              setkyccity(response.data.download.kycResult.personalIdentifiableData.personalDetails.corresCity)
              setkycpincode(response.data.download.kycResult.personalIdentifiableData.personalDetails.corresPin)
              setkycemail(response.data.download.kycResult.personalIdentifiableData.personalDetails.email)
              setkycphone(response.data.download.kycResult.personalIdentifiableData.personalDetails.mobNum)
              setkycphonecode(response.data.download.kycResult.personalIdentifiableData.personalDetails.mobCode)
              setkycage(response.data.search.kycResult.age)
              setidno(1)
              setTimeout(function() {
                setidno(0)
               }, 5000);
               console.log('fatherfullname',response.data.download.kycResult.personalIdentifiableData.fatherFullname);
               console.log('india',response.data.download.kycResult.personalIdentifiableData.personalDetails.corresCountry);
              console.log("city",response.data.download.kycResult.personalIdentifiableData.personalDetails.corresCity);
              console.log("addrdss",response.data.download.kycResult.personalIdentifiableData.personalDetails.corresLine1);
              console.log("pincode",response.data.download.kycResult.personalIdentifiableData.personalDetails.corresPin);
              console.log("state",response.data.download.kycResult.personalIdentifiableData.personalDetails.corresState);
              console.log("email",response.data.download.kycResult.personalIdentifiableData.personalDetails.email);
              setdocumentloader(false)
          }else{
            
            // console.log("dfghkdfgggkajaykkk",response);
            // console.log("dfghkdfgggkajaykkk2",response.data);
            // console.log("dfghkdfgggkajaykkk3",response.data.kycStatus);
            // console.log("dfghkdfgggkajaykkk3",response.data.message);
             var result;
             if(response.data.data.kycStatus == 'FAILURE'){
              setdocumentsuperres(response.data.data.kycStatus)
                  setdocumentsupermsg(response.data.data.message)
                  setidno(2)
                  setTimeout(function() {
                    setidno(0)
                   }, 5000);
                  setdocumentloader(false)
  
             }else{
              //  result = JSON.parse(response.data);
              // setdocumentgranderror(result)
              // setdocumentsuperres(result.status)
              setdocumentsuperres(response.data.data.kycStatus)
                  setdocumentsupermsg(response.data.data.message)
              // if(result.message){
              //     setdocumentsupermsg(result.message)
              // }else{
              //     setdocumentsupermsg(result.data.message)
              // }
             }
              setidno(2)
              setTimeout(function() {
                setidno(0)
               }, 5000);
              // console.log("dfghkdfgggkajaykkk",result.data.message);
              // console.log('dfghjkdfghj',documentgranderror);
              setdocumentloader(false)
          }
          }
         
          
    
          // if(documentresponse.status === "SUCCESS"){
          //   setdocumentloader(false)
          //   setidno(1)
          //   setTimeout(function() {
          //     setidno(0)
          //    }, 5000); // 5000 milliseconds (5 seconds) delay
          //   setdocumentloader(false)
    
          // }
         
        }
      } catch (error) {
    console.log("we",error)
    setdocumentloader(false)
      }
    
    
    
    }
    }












  async function submitform(e) {
    e.preventDefault();
    if(documentsuperres == "SUCCESS"){
    setloader(true)

        const formdata = new FormData();
        formdata.append("productCheck", pselectcheck);
        formdata.append("transactionCheck", transtioncheck);

        formdata.append("fnameCheck", fnamecheck);
        formdata.append("lnameCheck", lnamecheck);
        formdata.append("mobile_noCheck", mobile_nocheck);
        formdata.append("genderCheck", gendercheck);
        formdata.append("emailCheck", emailIDcheck);
        formdata.append("companyCheck", companycheck);
        formdata.append("locationCheck", locationcheck);
        formdata.append("dobCheck", dobcheck);
        formdata.append("countryCheck", countrycheck);
        formdata.append("stateCheck", statecheck);
        formdata.append("cityCheck", citycheck);
        formdata.append("pincodeCheck", pincodecheck);
        formdata.append("addressCheck", addresscheck);
        formdata.append('photographCheck',photographcheck)
        formdata.append('document_typeCheck',true)
        formdata.append('issue_dateCheck',true)
        formdata.append("expiry_dateCheck", true);
        formdata.append("fathersFullName", kycfathername);
        formdata.append("fullName", kycfullname);
        formdata.append("photo", kycphoto);
        formdata.append("age", kycage);
        formdata.append("doc_dob", kycdob);
        formdata.append("doc_gender", kycgander);
        formdata.append("doc_mobile", `${kycphonecode}${kycphone}`);
        formdata.append("doc_email", kycemail);
        formdata.append("doc_address", kycaddress);
        formdata.append("doc_country", kyccountry);
        formdata.append("doc_state", kycstate);
        formdata.append("doc_city", kyccity);
        formdata.append("doc_pincode", kycpincode);
        // formdata.append("r_thumb", cr_thumb);
        // formdata.append("r_index_finger", cr_index_finger);
        // formdata.append("r_middle_finger", cr_middle_finger);
        // formdata.append("r_ring_finger", cr_ring_finger);
        // formdata.append("r_little_finger", cr_little_finger);
        // formdata.append("l_thumb", cl_thumb);
        // formdata.append("l_index_finger", cl_index_finger);
        // formdata.append("l_middle_finger", cl_middle_finger);
        // formdata.append("l_ring_finger", cl_ring_finger);
        // formdata.append("l_little_finger", cl_little_finger);

        try {
          const config = {
            headers: {
              Authorization: `Bearer ${gettokinval.access}`,
            },
          };
          let url = `${process.env.REACT_APP_API_URL}api/remittance_checking/${id}/`;
          const response = await axios.patch(url, formdata, config);
          console.log(response);
    
        setloader(false)
        nvg("/checkremittancelist/1")
        //   setgrandloading(false)
        //   nvg("/Customerlist/1")
        } catch (error) {
        //   setcustresponse({
        //     statusone: 1,
        //     message: "Something Went Wrong Try again",
        //   });
        setloader(false)
        //   setgrandloading(false)
        //   seterrorcls(error.response.data);
        //   seterrorclass(true);
        //   setloading(false)
        nvg("/checkremittancelist/2")
        console.log(error,'wert')
        seterrorcls(error.response.data);
        }
    }else{
        setidno(5)
            setTimeout(function() {
              setidno(0)
             }, 5000);
    }

  }




    return (
        <div style={{ width: '100%' }}>
            {/* <Header /> */}
            <div className="dashboardcontent px-2">

                <div className="container-fuild px-2 desgin1 ">
                    <div className="row bg-white ">
                        <div className="col-lg-12 d-flex justify-content-between py-2" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>
                            <p className="m-0 customfont" >Edit Remittance</p>
                            <div className="addnew d-block mb-2">
                                <button className="btn text-white closebtn"><NavLink to='/checkremittancelist/0' style={{ textDecoration: 'none', color: 'white' }}> x Close</NavLink></button>
                            </div>
                        </div>
                        {/* <div className="col-12 py-3 customtext23" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>Edit Remittance</div> */}
                    </div>
                </div>
                {srtloader == true ? <div className="container-fuild bg-white" style={{position:"relative"}}> <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
        <div className='px-2'> <Loadercomp size={100} /></div>
        </div></div> :<form onSubmit={submitform} > <div className="container-fuild px-2 pb-4 pt-3 bg-white">
                 
                    <div className="row bg-white pb-4 round" style={{ border: '1px solid #E0E0E0', margin: "10px 0px", borderRadius: '3px',position:'relative' }}>
                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">
                                        Customer Id
                                    </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>1234567890</p>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> */}
                       




                       {documentsuperres == "SUCCESS" ?<div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <h5 style={{color:'#0C5398',fontWeight:"700"}} ></h5>
                                </div>
                                <div className="col">
                                    <h5 style={{color:'#0C5398',fontWeight:"700"}} >Kyc First</h5>
                                </div>
                                <div className="col d-flex justify-content-between" style={{ gap: '22px' }}>
                                    <h5  style={{color:'#0C5398',fontWeight:"700"}} className=''>Response 1</h5>
                                </div>
                                <div className="col d-flex justify-content-between" style={{ gap: '22px' }}>
                                    <h5  style={{color:'#0C5398',fontWeight:"700"}} className=''>Response 2</h5>
                                </div>
                            </div>
                        </div>:''}

                       {documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-center">
                                <div className="col">
                                    <label htmlFor="" className="form-label">First Name</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{fname}</p>
                                    <input class="form-check-input" type="checkbox" value={fnamecheck} onChange={(e) => {
                            setfnamecheck(!fnamecheck);
                          }}  id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycfullname}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycfullname}</div> : ''}
                            </div>
                        </div> :  <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">First Name </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{fname}</p>
                                    <input class="form-check-input" type="checkbox" value={fnamecheck} onChange={(e) => {
                            setfnamecheck(!fnamecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycfullname}</div> : ''}
                            </div>
                        </div> }






                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">First Name </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{fname}</p>
                                    <input class="form-check-input" type="checkbox" value={fnamecheck} onChange={(e) => {
                            setfnamecheck(!fnamecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycfullname}</div> : ''}
                            </div>
                        </div> */}




{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Last Name</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{lname != "undefined" ? lname :''}</p>
                                    <input class="form-check-input" type="checkbox" value={lnamecheck} onChange={(e) => {
                            setlnamecheck(!lnamecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col  customcolor"></div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor"></div> : ''}
                            </div>
                        </div> : <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Last Name </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{lname != "undefined" && lname !== '' ? lname :''}</p>
                                    <input class="form-check-input" type="checkbox" value={lnamecheck}  onChange={(e) => {
                            setlnamecheck(!lnamecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> }



                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Last Name </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{lname}</p>
                                    <input class="form-check-input" type="checkbox" value={lnamecheck}  onChange={(e) => {
                            setlnamecheck(!lnamecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> */}








{documentsuperres == "SUCCESS" ?   <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-center">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Email </label>
                                </div>
                                {/* <div className="col d-flex justify-content-end " style={{flexWrap:"wrap"}}> */}
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-12 d-flex justify-content-end`}>
                                    <p className='customcolor'>{emailID}</p>
                                    <input class="form-check-input" type="checkbox" value={emailIDcheck} onChange={(e) => {
                            setemailIDcheck(!emailIDcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                
                                {documentsuperres == "SUCCESS" ? <div className="col d-flex customcolor" style={{flex:'wrap'}}>{kycemail}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col d-flex customcolor" style={{flex:'wrap'}}>{kycemail}</div> : ''}
                                {/* </div> */}

                            </div>
                        </div> :  <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label customw">Email  </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-xl-8 col-lg-4 col-8 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{emailID}</p>
                                    <input class="form-check-input" type="checkbox" value={emailIDcheck} onChange={(e) => {
                            setemailIDcheck(!emailIDcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-xl-8 col-lg-4 col-8 offset-xl-3 offset-lg-0 offset-3 customcolor">{kycemail}</div> : ''}
                            </div>
                        </div>}





                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label customw">Email  </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-xl-8 col-lg-4 col-8 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{emailID}</p>
                                    <input class="form-check-input" type="checkbox" value={emailIDcheck} onChange={(e) => {
                            setemailIDcheck(!emailIDcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-xl-8 col-lg-4 col-8 offset-xl-3 offset-lg-0 offset-3 customcolor">{kycemail}</div> : ''}
                            </div>
                        </div> */}









{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Gender</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{gender}</p>
                                    <input class="form-check-input" type="checkbox" value={gendercheck} onChange={(e) => {
                            setgendercheck(!gendercheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycgander}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycgander}</div> : ''}
                            </div>
                        </div> :<div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Gender </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{gender}</p>
                                    <input class="form-check-input" type="checkbox" value={gendercheck} onChange={(e) => {
                            setgendercheck(!gendercheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycgander}</div> : ''}
                            </div>
                        </div>}





                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Gender </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{gender}</p>
                                    <input class="form-check-input" type="checkbox" value={gendercheck} onChange={(e) => {
                            setgendercheck(!gendercheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycgander}</div> : ''}
                            </div>
                        </div> */}
                  




                  {documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">DOB</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{crtdate}</p>
                                    <input class="form-check-input" type="checkbox" value={dobcheck} onChange={(e) => {
                            setdobcheck(!dobcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycdob}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycdob}</div> : ''}
                            </div>
                        </div> :        <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">DOB </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{crtdate}</p>
                                    <input class="form-check-input" type="checkbox" value={dobcheck} onChange={(e) => {
                            setdobcheck(!dobcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycdob}</div> : ''}
                            </div>
                        </div>}






                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">DOB </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{crtdate}</p>
                                    <input class="form-check-input" type="checkbox" value={dobcheck} onChange={(e) => {
                            setdobcheck(!dobcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycdob}</div> : ''}
                            </div>
                        </div> */}








{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Age</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ?`col d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{age}</p>
                                    <input class="form-check-input" type="checkbox"  id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycage}</div>:''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycage}</div>:''}
                            </div>
                        </div> :   <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Age </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{age}</p>
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycage}</div>:''}
                            </div>
                        </div>}




                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Age </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{age}</p>
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycage}</div>:''}
                            </div>
                        </div> */}






{documentsuperres == "SUCCESS" ? <></> : <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Company </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{company}</p>
                                    <input class="form-check-input" type="checkbox" value={companycheck} onChange={(e) => {
                            setcompanycheck(!companycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div>}
                        {documentsuperres == "SUCCESS" ? <></> :                         <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Location </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{location}</p>
                                    <input class="form-check-input" type="checkbox" value={locationcheck} onChange={(e) => {
                            setlocationcheck(!locationcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div>}




                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Company </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{company}</p>
                                    <input class="form-check-input" type="checkbox" value={companycheck} onChange={(e) => {
                            setcompanycheck(!companycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Location </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{location}</p>
                                    <input class="form-check-input" type="checkbox" value={locationcheck} onChange={(e) => {
                            setlocationcheck(!locationcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> */}






{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-center">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Mobile No.</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end justify-content-end`} style={{ gap: '12px' }}>
                                    <p className='customcolor'>{mobile_no}</p>
                                    <input class="form-check-input" type="checkbox" value={mobile_nocheck} onChange={(e) => {
                            setmobile_nocheck(!mobile_nocheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycphone}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycphone}</div> : ''}
                            </div>
                        </div> :    <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Mobile No. </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-8 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{mobile_no}</p>
                                    <input class="form-check-input" type="checkbox" value={mobile_nocheck} onChange={(e) => {
                            setmobile_nocheck(!mobile_nocheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-8 offset-3 customcolor">{kycphone}</div> : ''}
                            </div>
                        </div>}
                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Mobile No. </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-8 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{mobile_no}</p>
                                    <input class="form-check-input" type="checkbox" value={mobile_nocheck} onChange={(e) => {
                            setmobile_nocheck(!mobile_nocheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-8 offset-3 customcolor">{kycphone}</div> : ''}
                            </div>
                        </div> */}










{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Address</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{address}</p>
                                    <input class="form-check-input" type="checkbox" value={addresscheck} onChange={(e) => {
                            setaddresscheck(!addresscheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycaddress}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycaddress}</div> : ''}
                            </div>
                        </div> :    <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Address </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{address}</p>
                                    <input class="form-check-input" type="checkbox" value={addresscheck} onChange={(e) => {
                            setaddresscheck(!addresscheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycaddress}</div> : ''}
                            </div>
                        </div>}
                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Address </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{address}</p>
                                    <input class="form-check-input" type="checkbox" value={addresscheck} onChange={(e) => {
                            setaddresscheck(!addresscheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycaddress}</div> : ''}
                            </div>
                        </div> */}




{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Country</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{country}</p>
                                    <input class="form-check-input" type="checkbox" value={countrycheck} onChange={(e) => {
                            setcountrycheck(!countrycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{getName(kyccountry)}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{getName(kyccountry)}</div> : ''}
                            </div>
                        </div> :<div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Country </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{country}</p>
                                    <input class="form-check-input" type="checkbox" value={countrycheck} onChange={(e) => {
                            setcountrycheck(!countrycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{ getName(kyccountry)}</div> : ''}

                            </div>
                        </div>}

                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Country </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{country}</p>
                                    <input class="form-check-input" type="checkbox" value={countrycheck} onChange={(e) => {
                            setcountrycheck(!countrycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{ getName(kyccountry)}</div> : ''}

                            </div>
                        </div> */}





{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">State</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{state}</p>
                                    <input class="form-check-input" type="checkbox" value={statecheck} onChange={(e) => {
                            setstatecheck(!statecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycstate}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycstate}</div> : ''}
                            </div>
                        </div> :     <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">State </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{state}</p>
                                    <input class="form-check-input" type="checkbox" value={statecheck} onChange={(e) => {
                            setstatecheck(!statecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycstate}</div> : ''}
                            </div>
                        </div>}


                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">State </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{state}</p>
                                    <input class="form-check-input" type="checkbox" value={statecheck} onChange={(e) => {
                            setstatecheck(!statecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycstate}</div> : ''}
                            </div>
                        </div> */}








{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">City</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{city}</p>
                                    <input class="form-check-input" type="checkbox" value={citycheck} onChange={(e) => {
                            setcitycheck(!citycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kyccity}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kyccity}</div> : ''}
                            </div>
                        </div> :  <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">City </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{city}</p>
                                    <input class="form-check-input" type="checkbox" value={citycheck} onChange={(e) => {
                            setcitycheck(!citycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kyccity}</div> : ''}
                            </div>
                        </div>}
                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">City </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{city}</p>
                                    <input class="form-check-input" type="checkbox" value={citycheck} onChange={(e) => {
                            setcitycheck(!citycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kyccity}</div> : ''}
                            </div>
                        </div> */}





{documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Pincode </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between`:`col-9 d-flex justify-content-end`}  style={{ gap: '22px' }}>
                                    <p className='customcolor'>{pincode}</p>
                                    <input class="form-check-input" type="checkbox" value={pincodecheck} onChange={(e) => {
                            setpincodecheck(!pincodecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycpincode}</div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor">{kycpincode}</div> : ''}
                            </div>
                        </div> :  <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Pincode  </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{pincode}</p>
                                    <input class="form-check-input" type="checkbox" value={pincodecheck} onChange={(e) => {
                            setpincodecheck(!pincodecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycpincode}</div> : ''}

                            </div>
                        </div>}

                        {documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Company</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{company}</p>
                                    <input class="form-check-input" type="checkbox" value={companycheck} onChange={(e) => {
                            setcompanycheck(!companycheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col  customcolor"></div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor"></div> : ''}
                            </div>
                        </div> :<></> }   

                        {documentsuperres == "SUCCESS" ? <div className="col-12 px-lg-4 px-md-2 pt-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="" className="form-label">Location</label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col d-flex justify-content-between justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{location}</p>
                                    <input class="form-check-input" type="checkbox" value={locationcheck} onChange={(e) => {
                            setlocationcheck(!locationcheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col  customcolor"></div> : ''}
                                {documentsuperres == "SUCCESS" ? <div className="col customcolor"></div> : ''}
                            </div>
                        </div> :<></> } 

                        {/* <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Pincode  </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{pincode}</p>
                                    <input class="form-check-input" type="checkbox" value={pincodecheck} onChange={(e) => {
                            setpincodecheck(!pincodecheck);
                          }} id="flexCheckChecked" required />
                                </div>
                                {documentsuperres == "SUCCESS" ? <div className="col-4 customcolor">{kycpincode}</div> : ''}

                            </div>
                        </div> */}
                        <div className="col-12">
                            <div className="row px-4 pt-3">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-12"><label htmlFor="" className="form-label">Biometric Detail </label> <input class="form-check-input" type="checkbox" value={biomcheck} onChange={(e) => {
                            setbiomcheck(!biomcheck);
                          }} id="flexCheckChecked" required /></div>
                                        <div className="col-12">
                                        <div className="border round py-3 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
     <label htmlFor="">Right Hand</label>
     <img src={cthumbimg2 == '' || cthumbimg2 == null ? img5 : img4} alt="rtf" style={{position:"absolute",top:"80px",left:"13px"}} />
     <img src={crifimg2 == '' || crifimg2 == null ? img5 : img4} alt="rif" style={{position:"absolute",top:"37px",left:"35px"}} />
     <img src={crmfimg2 == '' || crmfimg2 == null ? img5 : img4} alt="rmf" style={{position:"absolute",top:"30px",left:"65px"}} />
     <img src={crrfimg2 == '' || crrfimg2 == null ? img5 : img4} alt="rrf" style={{position:"absolute",top:"36px",left:"84px"}} />
     <img src={crlfimg2 == '' || crlfimg2 == null ? img5 : img4} alt="rlf" style={{position:"absolute",top:"55px",left:"103px"}} />
                          <img src={img1} alt="qwerty" />
                          </div>
                          <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
<label htmlFor="">Left Hand</label>
<img src={cllfimg2 == '' || cllfimg2 == null ? img5 : img4} alt="llf" style={{position:"absolute",top:"56px",left:"13px"}} />
     <img src={clrfimg2 == '' || clrfimg2 == null ? img5 : img4} alt="lrf" style={{position:"absolute",top:"36px",left:"33px"}} />
     <img src={clmfimg2 == '' || clmfimg2 == null ? img5 : img4} alt="lmf" style={{position:"absolute",top:"31px",left:"55px"}} />
     <img src={clifimg2 == '' || clifimg2 == null ? img5 : img4} alt="lif" style={{position:"absolute",top:"38px",left:"80px"}} />
     <img src={cltfimg2 == '' || cltfimg2 == null ? img5 : img4} alt="ltf" style={{position:"absolute",top:"80px",left:"102px"}} />
                          <img src={img2} alt="trew" />
                          </div>
                        </div>
                      </div>
                                    </div>
                                    <div className="col-12 py-2 px-4 d-flex justify-content-between">
                <button
                type='button'
                  // className="btn1"
                  style={{backgroundColor:"#0C5398"}}
                  className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  View
                </button>
              </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-12"><label htmlFor="" className="form-label">Photograph </label> <input class="form-check-input" type="checkbox" value={photographcheck} onChange={(e) => {
                            setphotographcheck(!photographcheck);
                          }} id="flexCheckChecked" required />
                                        </div>
                                        <div className="col-12 ">
                                            <div className="border round py-3 d-flex justify-content-center">
                                                {/* <img src={ photograph ? photograph : img3} alt="zxcvbnm" width="140px" height="162px" /> */}
                                                <button
                type='button'
                style={{border:'none',outline:'none'}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalthree"
                >
              <img src={photograph == null ? img3 : photograph} alt="zxcvbnm" width="140px" height="162px" />
              </button>
                   {documentsuperres == "SUCCESS" ? <div className="col-6 d-flex justify-content-center">
                                                    <button
                type='button'
                style={{border:'none',outline:'none'}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalfour"
                >
              <img src={`data:image/png;base64,${kycphoto}`} alt="zxcvbnm" width="140px" height="162px" />
              </button>
                                                    {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: `data:image/png;base64,${kycphoto}`,
                                    width:140,
                                    height:162
                                },
                                largeImage: {
                                    src: `data:image/png;base64,${kycphoto}`,
                                    width: 836,
                                    height: 1100
                                },
                                // enlargedImagePosition: 'over',
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            
                        /> */}
                                                    </div> : ''}
                                                {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: photograph == null ? img3 : photograph,
                                    width:140,
                                    height:162
                                },
                                largeImage: {
                                    src: photograph == null ? img3 : photograph,
                                    width: 836,
                                    height: 1100
                                },
                                // enlargedImagePosition: 'over',
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            
                        /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 ccolor py-3 px-4">Document<input class="form-check-input" type="checkbox" style={{ marginLeft: '8px' }} value='' id="flexCheckChecked" required />
                                </div>
                                <div className="col-xl-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-4">
        <label htmlFor="" className="form-label">
        Document Type 
        </label>
      </div>
      <div className={documentsuperres == "SUCCESS" ? `col-5 d-flex justify-content-end`:`col-8 d-flex justify-content-between justify-content-end`} style={{ gap: '22px' }}>





                                    <p className='customcolor'>{documenttype}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
     
      </div>
    </div>
  </div>


  <div className="col-xl-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-4">
        <label htmlFor="" className="form-label">
        Document No.
        </label>
      </div>
      <div className={documentsuperres == "SUCCESS" ? `col-5 d-flex justify-content-end`:`col-8 d-flex justify-content-between justify-content-end`} style={{ gap: '22px' }}>
      <p className='customcolor'>{idnumber}</p>
                        <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />

      </div>
    </div>
  </div>
  {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Expiry date </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentexpiry}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Issue date </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentissue}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Front Image
      </div>
      <div className="col-lg-8">
      <img src={aadhaarImage} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal34"
                >
View
                </button>
      </div>
    </div>
  </div>
  <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Back Image
      </div>
      <div className="col-lg-8">
      <img src={documentimagebacktwo} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal35"
                >
View
                </button>
      </div>
    </div>
  </div>


  <div className="col-12 py-5 px-4">
                                    <div style={{ background: '#D9D9D9', height: '1px', width: '100%' }}></div>
                                </div>


                                <div className="col-12 ccolor py-3 px-4">Document 2 <input class="form-check-input" type="checkbox" style={{ marginLeft: '8px' }} value='' id="flexCheckChecked" required />
                                </div>
                                <div className="col-xl-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-4">
        <label htmlFor="" className="form-label">
        Document Type 
        </label>
      </div>
      <div className={documentsuperres == "SUCCESS" ? `col-5 d-flex justify-content-end`:`col-8 d-flex justify-content-between justify-content-end`} style={{ gap: '22px' }}>





                                    <p className='customcolor'>{documenttype}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
     
      </div>
    </div>
  </div>


  <div className="col-xl-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-4">
        <label htmlFor="" className="form-label">
        Document No.
        </label>
      </div>
      <div className={documentsuperres == "SUCCESS" ? `col-5 d-flex justify-content-end`:`col-8 d-flex justify-content-between justify-content-end`} style={{ gap: '22px' }}>
      <p className='customcolor'>{idnumber}</p>
                        <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />

      </div>
    </div>
  </div>
  {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Expiry date </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentexpiry}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-xl-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Issue date </label>
                                </div>
                                <div className={documentsuperres == "SUCCESS" ? `col-4 d-flex justify-content-between`:`col-9 d-flex justify-content-end`} style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentissue}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Front Image
      </div>
      <div className="col-lg-8">
      <img src={aadhaarImage} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal34"
                >
View
                </button>
      </div>
    </div>
  </div>
  <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Back Image
      </div>
      <div className="col-lg-8">
      <img src={documentimagebacktwo} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal35"
                >
View
                </button>
      </div>
    </div>
  </div>

  {documentloader == true ? <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
<div className='px-2'>{documentloader == true ?  <Loadercomp size={100}  /> : ""}</div>
</div> : ''}
                                {loader == true ? <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
        <div className='px-2'>{loader == true ?  <Loadercomp size={100}  /> : ""}</div>
        </div> : ''}
        {idno == 1 ? documentsuperres == "SUCCESS" ? <div className="col-12 px-4 d-flex"> <div className="col-12 alert alert-success mt-3" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
         Verification Successfully 
            </h5>
       </div></div> : '' : ''}
       
       {idno == 5 ? <div className="col-12 px-4 d-flex"> <div className="col-12 col-offset-2 alert alert-danger mt-3 ms-1" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
         {`Please Verify your ${documenttype} First`}
            </h5>
       </div></div> : '' }
       {idno == 2 ? documentsuperres == "FAILURE" ? <div className="col-12 px-4 d-flex"> <div className="col-12 col-offset-2 alert alert-danger mt-3 ms-1" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
         {documentsupermsg}
            </h5>
       </div></div> : '' : '' }
       {idno == 2 ? documentsuperres == "UNKNOWN" ? <div className="col-12 px-4 d-flex"> <div className="col-12 col-offset-2 alert alert-danger mt-3 ms-1" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
         {documentsupermsg}
            </h5>
       </div></div> : '' : '' }
                                <div className="col-12 py-3 px-4 d-flex justify-content-end">
          {/* <button className='btn1'>Add</button> */}
          <button type='button' onClick={documentverify} className='btn2'>Submit</button>
        </div>
                                <div className="col-12 py-5 px-4">
                                    <div style={{ background: '#D9D9D9', height: '1px', width: '100%' }}></div>
                                </div>

                                <div className="col-xl-6 px-4 pt-3">
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-between">
                                            <label htmlFor="" className="form-label customw ">Select Product  </label>
                                        </div>
                                        <div className="col-8 d-flex justify-content-between" style={{ gap: '22px' }}>
                                            <p className='customcolor'>{pselect}</p>
                                            <input class="form-check-input" type="checkbox" value={pselectcheck} onChange={(e) => {
                            setpselectcheck(!pselectcheck);
                          }} id="flexCheckChecked" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 px-4 pt-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor="" className="form-label customw">Transaction No. </label>
                                        </div>
                                        <div className="col-8 d-flex justify-content-between" style={{ gap: '22px' }}>
                                            <p className='customcolor'>{transtion}</p>
                                            <input class="form-check-input" type="checkbox" value={transtioncheck} onChange={(e) => {
                            settranstioncheck(!transtioncheck);
                          }} id="flexCheckChecked" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="row px-4 pt-3">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-12"><label htmlFor="" className="form-label">Biometric Detail </label><input class="form-check-input" type="checkbox" value={productbioheck} onChange={(e) => {
                            setproductbioheck(!productbioheck);
                          }} id="flexCheckChecked" required /></div>
                                                <div className="col-12">
                        <div className="border round py-3 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
     <label htmlFor="">Right Hand</label>
     <img src={thumbimg2 == '' || thumbimg2 == null ? img5 : img4} alt="rtf" style={{position:"absolute",top:"80px",left:"13px"}} />
     <img src={rifimg2 == '' || rifimg2 == null ? img5 : img4} alt="rif" style={{position:"absolute",top:"37px",left:"35px"}} />
     <img src={rmfimg2 == '' || rmfimg2 == null ? img5 : img4} alt="rmf" style={{position:"absolute",top:"30px",left:"65px"}} />
     <img src={rrfimg2 == '' || rrfimg2 == null ? img5 : img4} alt="rrf" style={{position:"absolute",top:"36px",left:"84px"}} />
     <img src={rlfimg2 == '' || rlfimg2 == null ? img5 : img4} alt="rlf" style={{position:"absolute",top:"55px",left:"103px"}} />
                          <img src={img1} alt="qwerty" />
                          </div>
                          <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
<label htmlFor="">Left Hand</label>
<img src={llfimg2 == '' || llfimg2 == null ? img5 : img4} alt="llf" style={{position:"absolute",top:"56px",left:"13px"}} />
     <img src={lrfimg2 == '' || lrfimg2 == null ? img5 : img4} alt="lrf" style={{position:"absolute",top:"36px",left:"33px"}} />
     <img src={lmfimg2 == '' || lmfimg2 == null ? img5 : img4} alt="lmf" style={{position:"absolute",top:"31px",left:"55px"}} />
     <img src={lifimg2 == '' || lifimg2 == null ? img5 : img4} alt="lif" style={{position:"absolute",top:"38px",left:"80px"}} />
     <img src={ltfimg2 == '' || ltfimg2 == null ? img5 : img4} alt="ltf" style={{position:"absolute",top:"80px",left:"102px"}} />
                          <img src={img2} alt="trew" />
                          </div>
                        </div>
                        <div className="col-12 py-2 px-4 d-flex justify-content-between">
                <button
                type='button'
                  // className="btn1"
                  style={{backgroundColor:"#0C5398"}}
                  className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  View
                </button>
              </div>
                      </div>
                      {loader == true ? <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
        <div className='px-2'>{loader == true ?  <Loadercomp size={100}  /> : ""}</div>
        </div> : ''}

                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-12"><label htmlFor="" className="form-label">Photograph </label> <input class="form-check-input" type="checkbox" value={photocheck} onChange={(e) => {
                            setphotocheck(!photocheck);
                          }} id="flexCheckChecked" required /></div>
                                                <div className="col-12 ">
                                                    <div className=" border round py-3 d-flex justify-content-center">
                                                        {/* <img src={photo ? photo : img3} alt="zxcvbnm"  width="140px" height="162px" /> */}
                                                        <button
                type='button'
                style={{border:'none',outline:'none'}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModaltwo"
                >
              <img src={photo == null ? img3 : photo} alt="zxcvbnm" width="140px" height="162px" />
              </button>
                                                        {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: photo == null ? img3 : photo,
                                    width:140,
                                    height:162
                                },
                                largeImage: {
                                    src: photo == null ? img3 : photo,
                                    width: 836,
                                    height: 1100
                                },
                                // enlargedImagePosition: 'over',
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            
                        /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 py-5 px-4 d-flex justify-content-end" style={{ gap: '4px' }}>
                                    <button className='btn4'>Cancel</button>
                                    <button type='submit' className='btn5'>Checked</button>
                                    {/* <button className='btn5' data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered ">
                            <div className="modal-content">
                                <BsQuestionLg className='question-logo' />
                                {/* <i class="fa fa-exclamation" aria-hidden="true"></i> */}
                                <div className="modal-header mod-line">
                                    {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <div className="row gy-3 mt-2">
                                        <h1 className='ccedit-h'>Confirm Submission</h1>
                                        <p className="ccedit-p">Are you sure you want to submit all the selected data?
                                            After submission you won’t be able to edit the list</p>
                                    </div>
                                </div>
                                <div className="modal-footer mod-line m-auto">
                                    <button type="button" className="btn closecancel">Cancel</button>
                                    <button type="button" className="btn closebtn text-white">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></form>}
            </div>
            <div className="modal fade" id="exampleModalthree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>
                <div className="col-12 px-2 pt-3">
  <img src={photograph == null ? img3 : photograph} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
              </div>
            </div>
          </div>  
            <div className="modal fade" id="exampleModaltwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>
                <div className="col-12 px-2 pt-3">
  <img src={photo == null ? img3 : photo} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
              </div>
            </div>
          </div>  
            <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>

<div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="tf2" className="form-label ">Right Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" class="form-control" id='tf2' name="image2" style={{opacity:"0",position:'absolute'}}  onChange={(e) => {handleImageChange11(e)}}  /> */}
        {/* <label htmlFor="tf"> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: thumbimg2 != '' && thumbimg2 != null ? '' : '3rem',width:"20%" }}> {thumbimg2 != '' && thumbimg2 != null ? <img src={`data:image/png;base64,${thumbimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>

      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="ltf2" className="form-label ">Left Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="ltf2" onChange={(e) => {handleImageChange16(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: ltfimg2 != '' && ltfimg2 != null ? '' : '3rem',width:"20%" }}> {ltfimg2 != '' && ltfimg2 != null ? <img src={`data:image/png;base64,${ltfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rif2" className="form-label ">Right Index Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rif2" onChange={(e) => {handleImageChange12(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rifimg2 != '' && rifimg2 != null ? '' : '3rem',width:"20%" }}> {rifimg2 != '' && rifimg2 != null ? <img src={`data:image/png;base64,${rifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lif2" className="form-label ">Left Index Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lif2" onChange={(e) => {handleImageChange17(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lifimg2 != '' && lifimg2 != null ? '' : '3rem',width:"20%" }}> {lifimg2 != '' && lifimg2 != null ? <img src={`data:image/png;base64,${lifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rmf2" className="form-label ">Right Middle Finger<span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rmf2" onChange={(e) => {handleImageChange13(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rmfimg2 != '' && rmfimg2 != null ? '' : '3rem',width:"20%" }}> {rmfimg2 != '' && rmfimg2 != null ? <img src={`data:image/png;base64,${rmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lmf2" className="form-label ">Left Middle Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lmf2" onChange={(e) => {handleImageChange18(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lmfimg2 != '' && lmfimg2 != null ? '' : '3rem',width:"20%" }}> {lmfimg2 != '' && lmfimg2 != null ? <img src={`data:image/png;base64,${lmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rrf2" className="form-label ">Right Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rrf2" onChange={(e) => {handleImageChange14(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rrfimg2 != '' && rrfimg2 != null ? '' : '3rem',width:"20%" }}> {rrfimg2 != '' && rrfimg2 != null ? <img src={`data:image/png;base64,${rrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
       
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lrf2" className="form-label ">Left Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lrf2" onChange={(e) => {handleImageChange19(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lrfimg2 != '' && lrfimg2 != null ? '' : '3rem',width:"20%" }}> {lrfimg2 != '' && lrfimg2 != null ? <img src={`data:image/png;base64,${lrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rlf2" className="form-label ">Right Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rlf2" onChange={(e) => {handleImageChange15(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rlfimg2 != '' && rlfimg2 != null ? '' : '3rem',width:"20%" }}> {rlfimg2 != '' && rlfimg2 != null ? <img src={`data:image/png;base64,${rlfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
     
      </div>
    </div>
  </div>


 
 
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="llf2" className="form-label ">Left Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="llf2" onChange={(e) => {handleImageChange20(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: llfimg2 != '' && llfimg2 != null ? '' : '3rem',width:"20%" }}> {llfimg2 != '' && llfimg2 != null ? <img src={`data:image/png;base64,${llfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      
      </div>
    </div>
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>


          <div className="modal fade" id="exampleModal34" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>


  
  <div className="col-12 px-2 pt-3">
  <img src={aadhaarImage == null ? img3 : aadhaarImage} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>


          <div className="modal fade" id="exampleModal35" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>


  
  <div className="col-12 px-2 pt-3">
  <img src={documentimagebacktwo == null ? img3 : documentimagebacktwo} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>



          <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>

<div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="tf2" className="form-label ">Right Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" class="form-control" id='tf2' name="image2" style={{opacity:"0",position:'absolute'}}  onChange={(e) => {handleImageChange11(e)}}  /> */}
        {/* <label htmlFor="tf"> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cthumbimg2 != '' && cthumbimg2 != null ? '' : '3rem',width:"20%" }}> {cthumbimg2 != '' && cthumbimg2 != null ? <img src={`data:image/png;base64,${cthumbimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>

      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="ltf2" className="form-label ">Left Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="ltf2" onChange={(e) => {handleImageChange16(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cltfimg2 != '' && cltfimg2 != null ? '' : '3rem',width:"20%" }}> {cltfimg2 != '' && cltfimg2 != null ? <img src={`data:image/png;base64,${cltfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rif2" className="form-label ">Right Index Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rif2" onChange={(e) => {handleImageChange12(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crifimg2 != '' && crifimg2 != null ? '' : '3rem',width:"20%" }}> {crifimg2 != '' && crifimg2 != null ? <img src={`data:image/png;base64,${crifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lif2" className="form-label ">Left Index Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lif2" onChange={(e) => {handleImageChange17(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clifimg2 != '' && clifimg2 != null ? '' : '3rem',width:"20%" }}> {clifimg2 != '' && clifimg2 != null ? <img src={`data:image/png;base64,${clifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rmf2" className="form-label ">Right Middle Finger<span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rmf2" onChange={(e) => {handleImageChange13(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crmfimg2 != '' && crmfimg2 != null ? '' : '3rem',width:"20%" }}> {crmfimg2 != '' && crmfimg2 != null ? <img src={`data:image/png;base64,${crmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lmf2" className="form-label ">Left Middle Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lmf2" onChange={(e) => {handleImageChange18(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clmfimg2 != '' && clmfimg2 != null ? '' : '3rem',width:"20%" }}> {clmfimg2 != '' && clmfimg2 != null ? <img src={`data:image/png;base64,${clmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rrf2" className="form-label ">Right Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rrf2" onChange={(e) => {handleImageChange14(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crrfimg2 != '' && crrfimg2 != null ? '' : '3rem',width:"20%" }}> {crrfimg2 != '' && crrfimg2 != null ? <img src={`data:image/png;base64,${crrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
       
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lrf2" className="form-label ">Left Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lrf2" onChange={(e) => {handleImageChange19(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clrfimg2 != '' && clrfimg2 != null ? '' : '3rem',width:"20%" }}> {clrfimg2 != '' && clrfimg2 != null ? <img src={`data:image/png;base64,${clrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rlf2" className="form-label ">Right Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rlf2" onChange={(e) => {handleImageChange15(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crlfimg2 != '' && crlfimg2 != null ? '' : '3rem',width:"20%" }}> {crlfimg2 != '' && crlfimg2 != null ? <img src={`data:image/png;base64,${crlfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
     
      </div>
    </div>
  </div>


 
 
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="llf2" className="form-label ">Left Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="llf2" onChange={(e) => {handleImageChange20(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cllfimg2 != '' && cllfimg2 != null ? '' : '3rem',width:"20%" }}> {cllfimg2 != '' && cllfimg2 != null ? <img src={`data:image/png;base64,${cllfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      
      </div>
    </div>
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModalfour" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>
                <div className="col-12 px-2 pt-3">
  <img src={`data:image/png;base64,${kycphoto}`} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
    )
}

export default Ceditremittance