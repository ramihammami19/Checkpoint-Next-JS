import mailer from "../../../lib/mailer"


export async function POST(request: Request) {

try {
  const body = await  request.json()
  console.log(body);
  const template = `<body>
  <table width="650" style="background:#F5F5F5 url(https://learncodeweb.com/wp-content/uploads/2019/02/g-logo-mark-small.png) repeat; background-size:10%; border: 1px solid #ccc; padding:0px 30px; font-family:Arial;" cellspacing="0" cellpadding="0" border="0" align="center">
      <tbody>
          <tr>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td height="60">
                  <table  width="560" align="center" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
                      <tbody>
                          <tr>
                              <td width="100%" align="center" style="background:#FFF; border:1px solid #ccc;">
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>
                  <table bgcolor="#FFFFFF" width="560" style="border:1px solid #ccc; padding:20px; opacity:0.8; font-family:Arial; font-size:14px; line-height:18px;" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                          <tr>
                              <td>&nbsp;</td>
                          </tr>
                          <tr>
                              <td>&nbsp;</td>
                          </tr>
                          <tr>
                              <td align="center"><strong style="color:#55BDE8; font-size:3em; font-weight:bolder; text-align:center; margin:0px;">THANK YOU ${body.fullname}</strong><br /><br /></td>
                          </tr>
                          <tr>
                              <td align="center"><span style="color:#000; font-size:2.2em; text-align:center; margin:0px;">for reaching out</span></td>
                          </tr>
                          <tr>
                              <td>&nbsp;</td>
                          </tr>
                          <tr>
                              <td>&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="color:#4da6e1; font-size: 25px; padding-bottom: 10px; border-bottom: 1px solid #000;">Dear ${body.fullname},</td>
                          </tr>
                          <tr>
                              <td valign="top" align="left">
                              </td>
                          </tr>
                          <tr>
                              <td valign="top" align="left">
                                  <div>
                                      <p><strong>Hi ${body.fullname},</strong> Thank you for reaching out and considering me for your development project. I am excited about the opportunity to work with you and would love to discuss your requirements in detail.


                                      I am a full-stack developer with expertise in React, Node.js, Type script,Next js, etc. I have a year of experience in developing robust and scalable web applications, and I am confident that my skills and experience align well with your project needs.
                                      
                                      To better understand your project and how I can contribute, could you please provide more details on the following:
                                      
                                      Project Scope: What are the main objectives and goals of the project?
                                      Key Features: Are there any specific features or functionalities you require?
                                      Timeline: What is your expected timeline for project completion?
                                      Budget: Do you have a budget in mind for this project?
                                      I am available for a call or meeting at your convenience to discuss the project further and answer any questions you might have. Please let me know your preferred time and communication platform (Zoom, Google Meet, etc.).
                                      
                                      Thank you once again for considering me for this opportunity. I look forward to your response and hope to collaborate with you soon.
                                      
                                      Best regards, Rami Hammami</p>
                              </div></td>
                          </tr>
                          <tr>
                              <td>&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="border-bottom:1px solid #000;">&nbsp;</td>
                          </tr>
                          <tr>
                                  <br><br>Our mailing address is:
                                  <br><br>
                                  <br>La casa de coffe, El Mourouj 6, Ben arous   
                                  <br><br>  +216 93 300 845
                                  </p>
                              </td>
                          </tr>
                      
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>&nbsp;</td>
          </tr>
      </tbody>
  </table>
</body>`;
// mailer.sendEmail(req.body.to,req.body.subject,req.body.message)
mailer.sendEmail(body.email, body.subject, template);
return Response.json({success: true})

} catch (error) {
  console.log(error);
  
  return Response.json({error: error})

}

 
   
  }