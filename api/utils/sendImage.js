const htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>New message</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:inline-block!important;
}
.rollover div {
font-size:0px;
}
u ~ div img + div > div {
display:none;
}
#outlook a {
padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
color:inherit;
mso-style-priority:99;
}
a.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-header-body a:hover {
color:#a0a7ac!important;
}
.es-content-body a:hover {
color:#3ca7f1!important;
}
.es-footer-body a:hover {
color:#aaaaaa!important;
}
.es-infoblock a:hover {
color:#a0a7ac!important;
}
.es-button-border:hover > a.es-button {
color:#ffffff!important;
}
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important } a.es-button, button.es-button { display:block!important } .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
</style>
</head>
<body data-new-gr-c-s-loaded="14.1110.0" style="width:100%;height:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#555555"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#555555"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#555555">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr>
<td align="left" style="padding:0;Margin:0;padding-right:10px;padding-bottom:5px;padding-left:10px"><!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:280px" valign="top"><![endif]-->
<table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr>
<td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:280px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td class="es-infoblock" align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:18px;letter-spacing:0;color:#A0A7AC;font-size:12px">Put your preheader text here</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:280px" valign="top"><![endif]-->
<table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;width:280px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="right" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:18px;letter-spacing:0;color:#A0A7AC;font-size:12px"><a href="https://viewstripo.email" target="_blank" class="view" style="mso-line-height-rule:exactly;text-decoration:none;color:#A0A7AC;font-size:12px;line-height:18px">SEE THIS EMAIL ONLINE</a></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F8F8F8;width:600px">
<tr>
<td style="Margin:0;padding-right:10px;padding-left:10px;padding-top:20px;padding-bottom:20px;background-color:#191919" bgcolor="#191919" align="left">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:580px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://sdozkk.stripocdn.email/content/guids/CABINET_9010ae0a1df23d67018e3193680286776d9cf76eeb164820460cfb6c45fbfcb5/images/logo_rincon_matero.png" alt="" width="200" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;background-color:#ffcc99" bgcolor="#ffcc99" align="left">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><h1 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:30px;font-style:normal;font-weight:normal;line-height:69px !important;color:#333333"><strong>​ ¡TU ORDEN FUE CONFIRMADA!</strong></h1></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-left:10px;padding-top:15px;padding-bottom:15px"><h6 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px !important;font-style:normal;font-weight:normal;line-height:21px !important;color:#333333"><strong>¡Hola! Tu orden n° 8564512 fue confirmada y estamos procesando el envio.</strong></h6><h6 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px !important;font-style:normal;font-weight:normal;line-height:21px !important;color:#333333"><strong>En breve recibiras el codigo de seguimiento</strong></h6></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td style="Margin:0;padding-right:10px;padding-left:10px;padding-top:15px;padding-bottom:10px;background-color:#f8f8f8" bgcolor="#f8f8f8" align="left">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:580px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:29px;color:#191919"><strong>Items</strong><br></h2></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td style="Margin:0;padding-bottom:5px;padding-right:20px;padding-left:20px;padding-top:25px;background-color:#f8f8f8" bgcolor="#f8f8f8" align="left"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
<table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr>
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://sdozkk.stripocdn.email/content/guids/CABINET_9010ae0a1df23d67018e3193680286776d9cf76eeb164820460cfb6c45fbfcb5/images/d_nq_np_984607mla53647169717_022023o.jpg" alt="" width="270" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
<table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr>
<td align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px"><strong>Mate Imperial XL</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Color: Negro y plata</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Origen: Argentina</p></td>
</tr>
<tr>
<td align="left" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><span style="font-size:15px"><strong style="line-height:150%">Precio:</strong>&nbsp;$30.000.-</span></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><span style="font-size:15px"><strong>Cantidad: 1</strong></span></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr>
<td style="Margin:0;padding-right:10px;padding-left:10px;padding-bottom:10px;padding-top:10px;background-color:#f8f8f8" bgcolor="#f8f8f8" align="left">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:580px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td bgcolor="#f8f8f8" align="center" style="Margin:0;padding-right:10px;padding-left:10px;padding-top:20px;padding-bottom:20px;font-size:0">
<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td style="padding:0;Margin:0;border-bottom:1px solid #191919;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td style="Margin:0;padding-right:10px;padding-left:10px;padding-top:15px;padding-bottom:10px;background-color:#eeeeee" bgcolor="#eeeeee" align="left">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:580px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:29px;color:#191919"><strong>ORDEN Y ENVIO</strong></h2></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td style="Margin:0;padding-right:20px;padding-left:20px;padding-top:10px;padding-bottom:30px;background-color:#eeeeee" bgcolor="#eeeeee" align="left"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
<table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr>
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><h3 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#242424">Detalle de orden</h3></td>
</tr>
<tr>
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Order №:</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Member №:</strong>&nbsp;213983</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Metodo de envio:</strong>&nbsp;Standard</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Fecha:</strong>&nbsp;13/09/2023</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
<table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr>
<td align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><h3 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#242424">Direccion de envio</h3></td>
</tr>
<tr>
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Calle falsa 123</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Buenos Aires</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">San jose, CA 1414<br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr>
<td style="Margin:0;padding-right:20px;padding-left:20px;padding-top:25px;padding-bottom:30px;background-color:#f8f8f8" bgcolor="#f8f8f8" align="left"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
<table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr>
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#242424">Telefono de contacto</h3></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:20px !important;letter-spacing:0;color:#242424;font-size:14px">Whatsapp&nbsp;<a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#3CA7F1;font-size:14px;line-height:21px" href="tel:123456789">123456789</a>&nbsp;o&nbsp;<a target="_blank" href="https://viewstripo.email/v " style="mso-line-height-rule:exactly;text-decoration:none;color:#3CA7F1;font-size:14px">visita nuestra tienda&nbsp;</a>para asistencia.</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
<table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr>
<td align="left" style="padding:0;Margin:0;width:270px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#242424">​</h3></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#242424;font-size:14px">Satisfaccion 100% garantizada.</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#242424;width:600px">
<tr>
<td align="left" style="padding:20px;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:20px;padding-top:10px;font-size:0">
<table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><a href="https://twitter.com/rinconmatero" style="mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:13px"><img title="X.com" src="https://sdozkk.stripocdn.email/content/assets/img/social-icons/circle-gray/x-circle-gray.png" alt="X" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
<td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><a href="https://facebook.com/rinconmatero" style="mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:13px"><img title="Facebook" src="https://sdozkk.stripocdn.email/content/assets/img/social-icons/circle-gray/facebook-circle-gray.png" alt="Fb" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
<td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><img title="Youtube" src="https://sdozkk.stripocdn.email/content/assets/img/social-icons/circle-gray/youtube-circle-gray.png" alt="Yt" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
<td valign="top" align="center" style="padding:0;Margin:0"><img title="Linkedin" src="https://sdozkk.stripocdn.email/content/assets/img/social-icons/circle-gray/linkedin-circle-gray.png" alt="In" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
</table></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:20px;letter-spacing:0;color:#888888;font-size:13px"><strong><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:13px;line-height:20px" href="https://viewstripo.email">Mira todos nuestros productos</a>&nbsp;</strong>• Rincon matero</p></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:16px;letter-spacing:0;color:#888888;font-size:13px">Rincon Matero, Inc.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:16px;letter-spacing:0;color:#888888;font-size:13px">Belen 555, Buenos Aires</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:16px;letter-spacing:0;color:#888888;font-size:13px"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:13px;line-height:16px" href="tel:123456789">123456789</a></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:16px;letter-spacing:0;color:#888888;font-size:13px"><a target="_blank" href="mailto:rinconmatero@argentina.com" style="mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:13px;line-height:16px">your@mail.com</a></p></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:20px;letter-spacing:0;color:#888888;font-size:13px"><strong>​</strong></p></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:20px;letter-spacing:0;color:#888888;font-size:13px"><em style="font-size:11px;line-height:17px">​</em></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>`;

module.exports = {
  htmlTemplate,
};
