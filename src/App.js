import React, { Component } from 'react'
import { AppTemplate, LandingTemplate } from 'layouts/templates'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return ( 
      <LandingTemplate
        appLogoUri="https://i.pinimg.com/originals/dd/6a/ff/dd6aff5e0af0875fdf90e215debb39dd.png"
        appTitle="ระบบจัดการบริหารห้องเรียน"
        appDesc="มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น Layout"        
        loginTitle="ยินดีต้อนรับ"
        loginDesc="ท่านสามารถเข้าใช้งานได้โดยใช้ PSU Passport"
        textLoginButton="เข้าสู่ระบบ"
        themeColor="#686de0"
        buttonLoginColor="#6ab04c"
        fullContent={`<ul class="list-group thai-font">
          <li class="cover list-group-item list-group-item-success">
          <div class="col-md-2 col-xs-6"><img class="img-responsive" src="https://saas.eng.psu.ac.th/crm/images/smartphone-notify.png" alt="send-notification"></div>
          <div class="col-md-10 col-xs-12"><i class="fa fa-check fa-fw"></i>ส่งข้อความแจ้งเตือน (Push Notification message) ไปยัง PSUIntaniaBuddy Mobile App ของนักศึกษา
          <p style="color:gray;font-size:16px;">*จำกัดปริมาณการส่ง 1,000 ข้อความ/ต่อผู้ใช้งานระบบ/ต่อเทอม สามารถขอเพิ่มได้ด้วยตนเองผ่านระบบนี้</p>
          </div>
          <div class="clearfix"></div>
          </li><li class="cover list-group-item">
            <div class="col-md-2 col-xs-6"><img class="img-responsive" src="https://saas.eng.psu.ac.th/crm/images/mail-envelopes-couple.png" alt="send-mail"></div>
            <div class="col-md-10 col-xs-12"><span style="color:red"><i class="fa fa-ban fa-fw" style="color:red"></i>ยังไม่เปิดใช้งาน</span> ส่งอีเมลประชาสัมพันธ์ข่าวสารถึงศิษย์เก่าฯ คณะวิศวกรรมศาสตร์ได้</div>
            <div class="clearfix"></div>
          </li>
          <div class="clearfix"></div>
          
          <li class="cover list-group-item">
          <div class="col-md-2 col-xs-6"><img class="img-responsive" src="https://saas.eng.psu.ac.th/crm/images/social-login-icon.png" alt="facebook-google"></div>
          <div class="col-md-10 col-xs-12"><span style="color:red"><i class="fa fa-ban fa-fw" style="color:red"></i>ยังไม่เปิดใช้งาน</span> ศิษย์เก่าฯ Login ด้วย facebook หรือ google หรือ Line account เข้าใช้งานระบบเพื่อเชื่อมต่อกับคณะฯ เช่น update ข้อมูลของศิษย์เก่าฯ หรือฝากข่าวประชาสัมพันธ์ เป็นต้น</div>
          <div class="clearfix"></div>
          </li>
        </ul>`}
        titleContact='ติดต่อและสอบถาม'
        textContact='749935'
        >
      </LandingTemplate>
      
    )
  }
}
export default App;
