// import React from 'react';
import React, { useEffect } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillReplyAllFill } from "react-icons/bs";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import FloatingMenuStyles from '../styles/FloatingMenus.module.css';

// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
//Bootstrap 5 Modules


const FLoatingMenus = () => {

    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css')
        import('bootstrap/dist/js/bootstrap.min.js')
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
        .forEach(tooltipNode => new Tooltip(tooltipNode))
    });

    return (  
        <div className={` ${FloatingMenuStyles.iconWrapper}`}>
            <a target="_blank" className={`${FloatingMenuStyles.iconLinks}`}>	
                <BsBarChartFill className={`${FloatingMenuStyles.facebookBg} ${FloatingMenuStyles.awesomeSocial}`}/>
            </a>
            <a target="_blank" className={`${FloatingMenuStyles.iconLinks}`}>	
                <BsFillPiggyBankFill className={`bg-danger ${FloatingMenuStyles.awesomeSocial}`} 
                    data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on bottom"/>
            </a>
            <a target="_blank" className={`${FloatingMenuStyles.iconLinks}`}>	
                <BsFillReplyAllFill className={`bg-success ${FloatingMenuStyles.awesomeSocial}`}/>
            </a>
            <a target="_blank" className={`${FloatingMenuStyles.iconLinks}`}>	
                <FaWpforms className={`${FloatingMenuStyles.linkedInBg} ${FloatingMenuStyles.awesomeSocial}`}/>
            </a>
        </div>
  )
}

export default FLoatingMenus