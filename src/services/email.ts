export const sendEmail = () => {
    const email = "carlosgabrielcampo@gmail.com";
    const subject = encodeURIComponent("Contact");
    const body = encodeURIComponent("Hi,\n\nI would like to talk about...");
  
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}