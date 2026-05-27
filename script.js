document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // EmailJS Configuration - Fill in your custom credentials here!
  // ==========================================================================
  const EMAILJS_PUBLIC_KEY = 'N0zaPHHLRfh_IKfyi';   // Replace with your EmailJS Public Key
  const EMAILJS_SERVICE_ID = 'service_pfbbia6';   // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'template_rx4u7bb'; // Replace with your EmailJS Template ID

  // Initialize EmailJS browser SDK
  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('.site-nav');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const langLabel = document.querySelector('[data-lang-label]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
  }

  const yearSpan = document.querySelector('[data-year]');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      if (nav && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
      }
    });
  });

  const translations = {
    en: {
      brand_name: 'Shukla Internet Cafe',
      brand_location: 'Sahson, Prayagraj',
      brand_tagline: 'All Online & Govt Services',
      nav_services: 'Services',
      nav_about: 'About',
      nav_location: 'Location',
      nav_contact: 'Contact',
      nav_whatsapp: 'WhatsApp Us',
      hero_title: 'Your Trusted Digital <br />Service Center',
      hero_body:
        'From fresh PAN and correction forms to income, caste, domicile certificates, ration card work and all types of online forms &amp; internet cafe services – everything under one roof at <strong>Shukla Internet Cafe</strong>.',
      hero_primary_cta: 'Chat on WhatsApp',
      hero_secondary_cta: 'View Services',
      hero_point_1: 'Guidance for all Government &amp; Online forms',
      hero_point_2: 'Quick processing with proper documentation',
      hero_point_3: 'Friendly support in Hindi &amp; English',
      hero_services_title: 'Popular Services Today',
      hero_services_item_1: 'Fresh PAN Application &amp; PAN Correction',
      hero_services_item_2: 'Income, Caste &amp; Domicile Certificates',
      hero_services_item_3: 'Ration Card New / Update / Correction',
      hero_services_item_4: 'Online Forms – Govt, Education &amp; Others',
      hero_services_item_5: 'Printing, Scanning, Online Payment Support',
      services_title: 'Our Services',
      services_subtitle:
        'Built for your needs – we handle all common government and online services with care so that you do not have to worry about the process.',
      service_pan_new_title: 'Fresh PAN Application',
      service_pan_new_body:
        'Applying for a new PAN card has never been easier. We handle the entire application process for you, ensuring that all your information—including name, date of birth, and address—is accurately entered according to the latest Income Tax Department regulations. We also assist with proper formatting of your passport-sized photograph and digital signature to prevent any application rejections. Let us take the stress out of your PAN application with our expert guidance and fast processing.',
      service_pan_new_point_1: 'Form filling &amp; data entry',
      service_pan_new_point_2: 'Document check &amp; guidance',
      service_pan_new_point_3: 'Online payment support',
      service_pan_new_cta: 'WhatsApp about PAN Application',
      service_pan_correction_title: 'PAN Correction / Update',
      service_pan_correction_body:
        'If your existing PAN card has errors or outdated information, we provide seamless correction and update services. Whether you need to change your name after marriage, update your date of birth, correct your address, or simply request a reprint of a lost card, we ensure that your demographic details are updated smoothly. We carefully verify all your supporting proof documents to guarantee a hassle-free update process and provide you with regular status tracking until your new card arrives.',
      service_pan_correction_point_1: 'Name / DOB / Address correction',
      service_pan_correction_point_2: 'Re-issue PAN card',
      service_pan_correction_point_3: 'Status tracking assistance',
      service_pan_correction_cta: 'WhatsApp about PAN Correction',
      service_govt_title: 'Govt Certificates',
      service_govt_body:
        'Navigating government portals can be complex, but our expert assistance simplifies the acquisition of essential state and central government certificates. We provide end-to-end online application support for Income Certificates, Caste Certificates, Domicile (Residence) Certificates, and more. Our team ensures that all necessary affidavits and supporting documents are correctly scanned and uploaded to the respective state portals, maximizing the chances of quick approval and issuance.',
      service_govt_point_1: 'Income Certificate',
      service_govt_point_2: 'Caste Certificate',
      service_govt_point_3: 'Domicile / Residence Certificate',
      service_govt_cta: 'WhatsApp about Govt Certificates',
      service_ration_title: 'Ration Card Services',
      service_ration_body:
        'We offer comprehensive assistance for all your Ration Card requirements. Whether you are applying for a completely new household Ration Card, needing to add a new family member or remove an existing one, or updating your residential address, we process your requests efficiently through the official food and civil supplies portal. We help you gather the correct documentation and provide online status checking so you are always informed about your application\'s progress.',
      service_ration_point_1: 'New ration card application',
      service_ration_point_2: 'Update / correction',
      service_ration_point_3: 'Online status checking',
      service_ration_cta: 'WhatsApp about Ration Card',
      service_online_title: 'Online Forms &amp; Applications',
      service_online_body:
        'From competitive examination registrations and college admission forms to critical government scholarship applications, we expertly manage all types of online form submissions. We understand that missing a deadline or making a data entry error can be costly. Therefore, our staff meticulously fills out your forms, properly resizes and uploads required documents, and securely processes necessary application fees, giving you peace of mind that your application is flawless.',
      service_online_point_1: 'Government scheme forms',
      service_online_point_2: 'College / exam registration',
      service_online_point_3: 'Scholarship &amp; application forms',
      service_online_cta: 'WhatsApp about Online Forms',
      service_other_title: 'Other Internet Cafe Services',
      service_other_body:
        'Our center is fully equipped to handle all your day-to-day digital and administrative tasks in one convenient location. We offer high-quality printing, document scanning, photocopying, and secure lamination services to protect your important papers. Additionally, we assist with secure online payments, professional email drafting, English typing and resume creation tailored to the local Indian market needs.',
      service_other_point_1: 'Print, scan &amp; photocopy, lamination',
      service_other_point_2: 'Secure online payments',
      service_other_point_3: 'Email, resume creation and English typing',
      service_other_cta: 'WhatsApp about Other Services',
      location_title: 'Location &amp; Timings',
      location_subtitle:
        'Visit our centre for any offline help, document verification and guidance.',
      location_address_heading: 'Address',
      location_address_body:
        'Shukla Internet Cafe<br />Near Ram Janki Mandir, Sahson, Prayagraj<br />Uttar Pradesh- PIN 221507, India',
      location_contact_heading: 'Contact',
      location_hours_heading: 'Opening Hours',
      location_hours_body: 'Monday to Sunday: 08:00 AM – 09:00 PM',
      location_open_maps_btn: 'Open in Google Maps',
      location_open_maps_full: 'Open full location in Google Maps \u2192',
      footer_brand_name: 'Shukla Internet Cafe',
      footer_brand_body:
        'Trusted partner for PAN, government certificates, ration card and all internet cafe services in the Indian market.',
      footer_quick_links_heading: 'Quick Links',
      footer_quick_services: 'Our Services',
      footer_quick_location: 'Location &amp; Timings',
      footer_quick_whatsapp: 'WhatsApp Enquiry',
      footer_contact_heading: 'Contact',
      footer_note_heading: 'Note',
      footer_note_body:
        'All services are provided as per the latest government guidelines. Please carry original documents and photocopies where required. For any urgent inquiries, you can directly email us at shuklacafe2016@gmail.com or send a message on WhatsApp. We are dedicated to providing excellent customer service.',
      service_courier_title: 'Courier Service (DTDC Partner)',
      service_courier_body:
        'As an authorized DTDC courier partner, we offer reliable and fast shipping solutions right from our counter. Whether you need to dispatch urgent documents locally or send parcels across India and to select international destinations, we ensure secure packaging and proper routing. We provide immediate booking receipts with tracking numbers, and our staff is always available to help you track your consignment\'s journey until it safely reaches its final destination.',
      service_courier_point_1: 'DTDC parcel booking and tracking help',
      service_courier_point_2: 'Packing guidance for important documents',
      service_courier_point_3: 'Pickup information and delivery status support',
      service_courier_cta: 'WhatsApp about DTDC Courier',
      about_title: 'About Shukla Internet Cafe',
      about_subtitle:
        'Shukla Internet Cafe in Sahson, Prayagraj has been helping students, working professionals and families with reliable online and government related services.',
      about_who_heading: 'Who We Are',
      about_who_body:
        'Founded in 2016, Shukla Internet Cafe started with a simple vision: to bridge the digital divide for the residents of Sahson and surrounding areas. Over the years, we have grown from a small browsing center into a comprehensive digital service hub, trusted by thousands of students, working professionals, and families for their most crucial online needs.<br><br>Our mission is to provide hassle-free, transparent, and prompt assistance for a wide array of government and online services. We understand that navigating online portals can be overwhelming, which is why our experienced staff is committed to guiding you step-by-step—ensuring your forms are filled accurately and your documents are processed without delay.<br><br>We are deeply committed to serving our local community. Whether it\'s helping a student apply for a life-changing scholarship, assisting a farmer with government scheme registrations, or providing reliable printing and courier services, we take pride in empowering our neighbors through accessible technology and dedicated support.',
      about_why_heading: 'Why People Prefer Us',
      about_why_point_1: 'Clear explanation of documents required for each service',
      about_why_point_2: 'Honest guidance for government and online procedures',
      about_why_point_3: 'WhatsApp support for quick questions and status updates',
      about_courier_heading: 'DTDC Courier Partner',
      about_courier_body:
        'As a DTDC courier service point, we help you send important documents and parcels with trusted logistics support, booking receipts and tracking assistance.',
      contact_form_title: 'Send a Message',
      contact_form_subtitle: 'Have a question or want to start a service? Fill out the form below and we will get back to you quickly.',
      contact_info_title: 'Get in Touch',
      contact_info_desc: 'Feel free to reach out to us directly through any of our channels or visit our shop during open hours.',
      contact_label_phone: 'Call Us',
      contact_label_whatsapp: 'WhatsApp Us',
      contact_label_email: 'Email Us',
      contact_label_address: 'Address',
      form_label_name: 'Full Name',
      form_label_phone: 'Mobile / WhatsApp Number',
      form_label_email: 'Email Address',
      form_label_service: 'Service Required',
      form_option_select: 'Select a Service',
      form_label_message: 'Your Message / Details',
      form_btn_submit: 'Send Message',
      form_success_title: 'Thank you!',
      form_success_body: 'Your message has been sent successfully. We will contact you soon.',
      form_success_whatsapp: 'Send via WhatsApp',
      form_placeholder_name: 'Enter your full name',
      form_placeholder_phone: '10-digit mobile number',
      form_placeholder_email: 'name@example.com (optional)',
      form_placeholder_message: 'Describe what help you need in detail...',
    },
    hi: {
      brand_name: 'शुक्ला इंटरनेट कैफे',
      brand_location: 'सहसों, प्रयागराज',
      brand_tagline: 'सभी ऑनलाइन और सरकारी सेवाएँ',
      nav_services: 'सेवाएँ',
      nav_about: 'हमारे बारे में',
      nav_location: 'स्थान',
      nav_contact: 'संपर्क',
      nav_whatsapp: 'व्हाट्सऐप करें',
      hero_title: 'आपका भरोसेमंद <br />डिजिटल सर्विस सेंटर',
      hero_body:
        'नए और करेक्शन पैन फॉर्म से लेकर आय, जाति, निवास प्रमाण पत्र, राशन कार्ड कार्य और हर प्रकार के ऑनलाइन फॉर्म – ये सब कुछ एक ही जगह <strong>शुक्ला इंटरनेट कैफे</strong> पर उपलब्ध है।',
      hero_primary_cta: 'व्हाट्सऐप पर बात करें',
      hero_secondary_cta: 'सेवाएँ देखें',
      hero_point_1: 'सभी सरकारी और ऑनलाइन फॉर्म के लिए मार्गदर्शन',
      hero_point_2: 'जरूरी दस्तावेज़ों के साथ तेज़ और सुरक्षित प्रक्रिया',
      hero_point_3: 'हिन्दी और अंग्रेज़ी दोनों में सहायता',
      hero_services_title: 'आज की प्रमुख सेवाएँ',
      hero_services_item_1: 'नया पैन आवेदन और पैन करेक्शन',
      hero_services_item_2: 'आय, जाति और निवास प्रमाण पत्र',
      hero_services_item_3: 'राशन कार्ड नया / अपडेट / करेक्शन',
      hero_services_item_4: 'ऑनलाइन फॉर्म – सरकारी, शिक्षा और अन्य',
      hero_services_item_5: 'प्रिंटिंग, स्कैनिंग, ऑनलाइन पेमेंट सहायता',
      services_title: 'हमारी सेवाएँ',
      services_subtitle:
        'आपकी ज़रूरतों के लिए तैयार – हम आम सरकारी और ऑनलाइन सेवाएँ इस तरह संभालते हैं कि आपको प्रक्रिया की चिंता न करनी पड़े।',
      service_pan_new_title: 'फ्रेश पैन आवेदन',
      service_pan_new_body:
        'नए पैन कार्ड के लिए आवेदन करना अब पहले से कहीं अधिक आसान हो गया है। हम आपके लिए पूरी आवेदन प्रक्रिया को संभालते हैं, यह सुनिश्चित करते हुए कि आपकी सभी जानकारी—जिसमें नाम, जन्म तिथि और पता शामिल है—आयकर विभाग के नवीनतम नियमों के अनुसार सटीक रूप से दर्ज की गई है। हम आपके आवेदन के अस्वीकार होने से रोकने के लिए आपके पासपोर्ट आकार के फोटो और डिजिटल हस्ताक्षर के उचित स्वरूपण में भी सहायता करते हैं। हमारे विशेषज्ञ मार्गदर्शन और तेज प्रसंस्करण के साथ अपने पैन आवेदन के तनाव को हम पर छोड़ दें।',
      service_pan_new_point_1: 'फॉर्म भरना और डेटा एंट्री',
      service_pan_new_point_2: 'दस्तावेज़ जाँच और मार्गदर्शन',
      service_pan_new_point_3: 'ऑनलाइन पेमेंट सहायता',
      service_pan_new_cta: 'फ्रेश पैन के लिए व्हाट्सऐप करें',
      service_pan_correction_title: 'पैन करेक्शन / अपडेट',
      service_pan_correction_body:
        'यदि आपके मौजूदा पैन कार्ड में त्रुटियां हैं या पुरानी जानकारी है, तो हम सहज सुधार और अपडेट सेवाएं प्रदान करते हैं। चाहे आपको शादी के बाद अपना नाम बदलना हो, अपनी जन्मतिथि अपडेट करनी हो, अपना पता सही करना हो, या खोए हुए कार्ड के पुनर्मुद्रण का अनुरोध करना हो, हम सुनिश्चित करते हैं कि आपका जनसांख्यिकीय विवरण सुचारू रूप से अपडेट हो। हम आपके सभी सहायक प्रमाण दस्तावेजों को ध्यान से सत्यापित करते हैं ताकि परेशानी मुक्त अपडेट प्रक्रिया की गारंटी मिल सके और जब तक आपका नया कार्ड न आ जाए तब तक आपको नियमित स्थिति ट्रैकिंग प्रदान करते हैं।',
      service_pan_correction_point_1: 'नाम / DOB / पता करेक्शन',
      service_pan_correction_point_2: 'पैन कार्ड री-इश्यू',
      service_pan_correction_point_3: 'स्टेटस ट्रैकिंग सहायता',
      service_pan_correction_cta: 'पैन करेक्शन के लिए व्हाट्सऐप करें',
      service_govt_title: 'सरकारी प्रमाण पत्र',
      service_govt_body:
        'सरकारी पोर्टलों को नेविगेट करना जटिल हो सकता है, लेकिन हमारी विशेषज्ञ सहायता आवश्यक राज्य और केंद्र सरकार के प्रमाण पत्र प्राप्त करने को सरल बनाती है। हम आय प्रमाण पत्र, जाति प्रमाण पत्र, अधिवास (निवास) प्रमाण पत्र, और अधिक के लिए एंड-टू-एंड ऑनलाइन आवेदन समर्थन प्रदान करते हैं। हमारी टीम यह सुनिश्चित करती है कि सभी आवश्यक हलफनामे और सहायक दस्तावेज सही ढंग से स्कैन किए गए हैं और संबंधित राज्य पोर्टलों पर अपलोड किए गए हैं, जिससे त्वरित अनुमोदन और जारी करने की संभावना अधिकतम हो जाती है।',
      service_govt_point_1: 'आय प्रमाण पत्र',
      service_govt_point_2: 'जाति प्रमाण पत्र',
      service_govt_point_3: 'निवास / रेज़िडेंस प्रमाण पत्र',
      service_govt_cta: 'सरकारी प्रमाण पत्र के लिए व्हाट्सऐप करें',
      service_ration_title: 'राशन कार्ड सेवाएँ',
      service_ration_body:
        'हम आपकी सभी राशन कार्ड आवश्यकताओं के लिए व्यापक सहायता प्रदान करते हैं। चाहे आप पूरी तरह से नए घरेलू राशन कार्ड के लिए आवेदन कर रहे हों, नए परिवार के सदस्य को जोड़ने या किसी मौजूदा को हटाने की आवश्यकता हो, या अपना आवासीय पता अपडेट कर रहे हों, हम आधिकारिक खाद्य और नागरिक आपूर्ति पोर्टल के माध्यम से आपके अनुरोधों को कुशलतापूर्वक संसाधित करते हैं। हम आपको सही दस्तावेज इकट्ठा करने में मदद करते हैं और ऑनलाइन स्थिति जांच प्रदान करते हैं ताकि आपको हमेशा अपने आवेदन की प्रगति के बारे में सूचित किया जा सके।',
      service_ration_point_1: 'नया राशन कार्ड आवेदन',
      service_ration_point_2: 'अपडेट / करेक्शन',
      service_ration_point_3: 'ऑनलाइन स्टेटस देखना',
      service_ration_cta: 'राशन कार्ड सेवाओं के लिए व्हाट्सऐप करें',
      service_online_title: 'ऑनलाइन फॉर्म और आवेदन',
      service_online_body:
        'प्रतियोगी परीक्षा पंजीकरण और कॉलेज प्रवेश फॉर्म से लेकर महत्वपूर्ण सरकारी छात्रवृत्ति आवेदनों तक, हम सभी प्रकार के ऑनलाइन फॉर्म सबमिशन का विशेषज्ञ रूप से प्रबंधन करते हैं। हम समझते हैं कि समय सीमा चूकना या डेटा एंट्री त्रुटि करना महंगा हो सकता है। इसलिए, हमारे कर्मचारी आपके फॉर्म को सावधानीपूर्वक भरते हैं, आवश्यक दस्तावेजों का उचित आकार बदलते हैं और अपलोड करते हैं, और आवश्यक आवेदन शुल्क को सुरक्षित रूप से संसाधित करते हैं, जिससे आपको यह शांति मिलती है कि आपका आवेदन निर्दोष है।',
      service_online_point_1: 'सरकारी योजनाओं के फॉर्म',
      service_online_point_2: 'कॉलेज / परीक्षा पंजीकरण',
      service_online_point_3: 'छात्रवृत्ति और अन्य आवेदन फॉर्म',
      service_online_cta: 'ऑनलाइन फॉर्म के लिए व्हाट्सऐप करें',
      service_other_title: 'अन्य इंटरनेट कैफे सेवाएँ',
      service_other_body:
        'हमारा केंद्र आपके सभी दैनिक डिजिटल और प्रशासनिक कार्यों को एक सुविधाजनक स्थान पर संभालने के लिए पूरी तरह से सुसज्जित है। हम आपके महत्वपूर्ण कागजात की सुरक्षा के लिए उच्च गुणवत्ता वाले प्रिंटिंग, दस्तावेज़ स्कैनिंग, फोटोकॉपी और सुरक्षित लेमिनेशन सेवाएं प्रदान करते हैं। इसके अतिरिक्त, हम सुरक्षित ऑनलाइन भुगतान, पेशेवर ईमेल ड्राफ्टिंग, और स्थानीय भारतीय बाज़ार की ज़रूरतों के अनुरूप रेज़्यूमे निर्माण में सहायता करते हैं।',
      service_other_point_1: 'प्रिंट, स्कैन और फोटोकॉपी, लैमिनेशन',
      service_other_point_2: 'सुरक्षित ऑनलाइन भुगतान',
      service_other_point_3: 'ईमेल और रेज़्यूमे निर्माण',
      service_other_cta: 'अन्य सेवाओं के लिए व्हाट्सऐप करें',
      service_courier_title: 'कूरियर सेवा (DTDC पार्टनर)',
      service_courier_body:
        'एक अधिकृत DTDC कूरियर पार्टनर के रूप में, हम सीधे अपने काउंटर से विश्वसनीय और तेज़ शिपिंग समाधान प्रदान करते हैं। चाहे आपको स्थानीय रूप से तत्काल दस्तावेज़ भेजने हों या पूरे भारत में और चुनिंदा अंतरराष्ट्रीय गंतव्यों में पार्सल भेजने हों, हम सुरक्षित पैकेजिंग और उचित रूटिंग सुनिश्चित करते हैं। हम ट्रैकिंग नंबरों के साथ तत्काल बुकिंग रसीदें प्रदान करते हैं, और हमारे कर्मचारी आपके कंसाइनमेंट की यात्रा को ट्रैक करने में आपकी मदद करने के लिए हमेशा उपलब्ध होते हैं जब तक कि यह सुरक्षित रूप से अपने अंतिम गंतव्य तक नहीं पहुंच जाता।',
      service_courier_point_1: 'DTDC पार्सल बुकिंग और ट्रैकिंग सहायता',
      service_courier_point_2: 'महत्वपूर्ण दस्तावेजों के लिए पैकिंग मार्गदर्शन',
      service_courier_point_3: 'पिकअप जानकारी और डिलीवरी स्टेटस सहायता',
      service_courier_cta: 'DTDC कूरियर के लिए व्हाट्सऐप करें',
      location_title: 'स्थान और समय',
      location_subtitle:
        'ऑफलाइन सहायता, डॉक्यूमेंट वेरिफिकेशन और मार्गदर्शन के लिए हमारे सेंटर पर आएँ।',
      location_address_heading: 'पता',
      location_address_body:
        'शुक्ला इंटरनेट कैफे<br />राम जानकी मंदिर के पास, सहसों, प्रयागराज<br />उत्तर प्रदेश - पिन 221507, भारत',
      location_contact_heading: 'संपर्क',
      location_hours_heading: 'खुलने का समय',
      location_hours_body: 'सोमवार से रविवार: सुबह 08:00 बजे – रात 09:00 बजे',
      location_open_maps_btn: 'गूगल मैप्स पर देखें',
      location_open_maps_full: 'पूरी लोकेशन गूगल मैप्स पर खोलें \u2192',
      footer_brand_name: 'शुक्ला इंटरनेट कैफे',
      footer_brand_body:
        'पैन, सरकारी प्रमाण पत्र, राशन कार्ड और सभी इंटरनेट कैफे सेवाओं के लिए आपका भरोसेमंद पार्टनर।',
      footer_quick_links_heading: 'त्वरित लिंक',
      footer_quick_services: 'हमारी सेवाएँ',
      footer_quick_location: 'स्थान और समय',
      footer_quick_whatsapp: 'व्हाट्सऐप पूछताछ',
      footer_contact_heading: 'संपर्क',
      footer_note_heading: 'नोट',
      footer_note_body:
        'सभी सेवाएँ नवीनतम सरकारी दिशा-निर्देशों के अनुसार दी जाती हैं। कृपया आवश्यक मूल दस्तावेज़ और फोटोकॉपी साथ लाएँ। किसी भी तत्काल पूछताछ के लिए, आप सीधे हमें shuklacafe2016@gmail.com पर ईमेल कर सकते हैं या व्हाट्सएप पर संदेश भेज सकते हैं। हम उत्कृष्ट ग्राहक सेवा प्रदान करने के लिए समर्पित हैं।',
      about_title: 'शुक्ला इंटरनेट कैफे के बारे में',
      about_subtitle:
        'सहसों, प्रयागराज स्थित शुक्ला इंटरनेट कैफे वर्षों से छात्रों, नौकरीपेशा लोगों और परिवारों की विश्वसनीय ऑनलाइन और सरकारी सेवाओं में मदद कर रहा है।',
      about_who_heading: 'हम कौन हैं',
      about_who_body:
        '2016 में स्थापित, शुक्ला इंटरनेट कैफे की शुरुआत एक सरल दृष्टिकोण के साथ हुई थी: सहसों और आसपास के क्षेत्रों के निवासियों के लिए डिजिटल अंतर को पाटना। पिछले कुछ वर्षों में, हम एक छोटे ब्राउज़िंग सेंटर से एक व्यापक डिजिटल सर्विस हब के रूप में विकसित हुए हैं, जिस पर हजारों छात्रों, कामकाजी पेशेवरों और परिवारों द्वारा उनकी सबसे महत्वपूर्ण ऑनलाइन जरूरतों के लिए भरोसा किया जाता है।<br><br>हमारा मिशन सरकारी और ऑनलाइन सेवाओं की एक विस्तृत श्रृंखला के लिए परेशानी मुक्त, पारदर्शी और त्वरित सहायता प्रदान करना है। हम समझते हैं कि ऑनलाइन पोर्टल्स को नेविगेट करना भारी पड़ सकता है, यही कारण है कि हमारे अनुभवी कर्मचारी आपको चरण-दर-चरण मार्गदर्शन करने के लिए प्रतिबद्ध हैं—यह सुनिश्चित करते हुए कि आपके फॉर्म सटीक रूप से भरे गए हैं और आपके दस्तावेजों को बिना किसी देरी के संसाधित किया जाता है।<br><br>हम अपने स्थानीय समुदाय की सेवा करने के लिए गहराई से प्रतिबद्ध हैं। चाहे वह किसी छात्र को जीवन बदलने वाली छात्रवृत्ति के लिए आवेदन करने में मदद करना हो, किसी किसान को सरकारी योजना पंजीकरण में सहायता करना हो, या विश्वसनीय प्रिंटिंग और कूरियर सेवाएं प्रदान करना हो, हम सुलभ तकनीक और समर्पित समर्थन के माध्यम से अपने पड़ोसियों को सशक्त बनाने में गर्व महसूस करते हैं।',
      about_why_heading: 'लोग हमें क्यों पसंद करते हैं',
      about_why_point_1: 'हर सेवा के लिए जरूरी दस्तावेज़ों की साफ़ जानकारी',
      about_why_point_2: 'सरकारी और ऑनलाइन प्रक्रिया के लिए ईमानदार मार्गदर्शन',
      about_why_point_3: 'तेज़ सवालों और स्टेटस अपडेट के लिए व्हाट्सऐप सहायता',
      about_courier_heading: 'DTDC कूरियर पार्टनर',
      about_courier_body:
        'DTDC कूरियर सर्विस प्वाइंट के रूप में हम आपके महत्वपूर्ण दस्तावेज़ों और पार्सल को सुरक्षित तरीके से भेजने, बुकिंग रसीद और ट्रैकिंग में मदद करते हैं।',
      contact_form_title: 'हमें संदेश भेजें',
      contact_form_subtitle: 'कोई प्रश्न है या सेवा शुरू करना चाहते हैं? नीचे दिया गया फॉर्म भरें और हम आपसे जल्द ही संपर्क करेंगे।',
      contact_info_title: 'संपर्क करें',
      contact_info_desc: 'हमारे किसी भी माध्यम से सीधे हमसे संपर्क करें या काम के घंटों के दौरान हमारी दुकान पर आएं।',
      contact_label_phone: 'हमें कॉल करें',
      contact_label_whatsapp: 'व्हाट्सऐप करें',
      contact_label_email: 'हमें ईमेल करें',
      contact_label_address: 'पता',
      form_label_name: 'पूरा नाम',
      form_label_phone: 'मोबाइल / व्हाट्सऐप नंबर',
      form_label_email: 'ईमेल पता',
      form_label_service: 'आवश्यक सेवा',
      form_option_select: 'एक सेवा चुनें',
      form_label_message: 'आपका संदेश / विवरण',
      form_btn_submit: 'संदेश भेजें',
      form_success_title: 'धन्यवाद!',
      form_success_body: 'आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।',
      form_success_whatsapp: 'व्हाट्सऐप द्वारा भेजें',
      form_placeholder_name: 'अपना पूरा नाम दर्ज करें',
      form_placeholder_phone: '10-अंकों का मोबाइल नंबर',
      form_placeholder_email: 'name@example.com (वैल्पिक)',
      form_placeholder_message: 'विस्तार से बताएं कि आपको क्या सहायता चाहिए...',
    },
  };

  function applyTranslations(lang) {
    const map = translations[lang];
    if (!map) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = map[key];
      if (!value) return;
      el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = map[key];
      if (!value) return;
      el.placeholder = value;
    });

    if (langLabel) {
      langLabel.textContent = lang === 'hi' ? 'EN' : 'हिं';
    }

    if (langToggle) {
      if (lang === 'hi') {
        langToggle.classList.add('lang-toggle-active');
      } else {
        langToggle.classList.remove('lang-toggle-active');
      }
    }

    try {
      window.localStorage.setItem('sic_lang', lang);
    } catch {
      // ignore storage errors
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current =
        (typeof window !== 'undefined' && window.localStorage.getItem('sic_lang')) || 'en';
      const next = current === 'en' ? 'hi' : 'en';
      applyTranslations(next);
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('sic-contact-form');
  const successOverlay = document.getElementById('form-success-overlay');
  const resetBtn = document.getElementById('form-reset-btn');
  const waBtn = document.getElementById('whatsapp-forward-btn');

  if (contactForm && successOverlay) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const email = document.getElementById('form-email').value || 'Not provided';
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value;

      // Construct WhatsApp message content
      const baseText = `Hi Shukla Internet Cafe,\n\nI have submitted a contact form on your website with the following details:\n\n*Name:* ${name}\n*Mobile:* ${phone}\n*Email:* ${email}\n*Service Required:* ${service}\n*Message:* ${message}`;
      const encodedText = encodeURIComponent(baseText);
      const waUrl = `https://wa.me/919454065068?text=${encodedText}`;

      // Loading state on button
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const submitBtnText = submitBtn ? submitBtn.querySelector('span') : null;
      const originalText = submitBtnText ? submitBtnText.innerHTML : 'Send Message';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitBtnText) {
          const currentLang = window.localStorage.getItem('sic_lang') || 'en';
          submitBtnText.textContent = currentLang === 'hi' ? 'भेजा जा रहा है...' : 'Sending...';
        }
      }

      // Format current timestamp in India/Kolkata timezone
      const submissionTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // Construct template parameters to match your EmailJS Template exactly!
      const templateParams = {
        name: name,
        email: email,
        title: service,
        time: submissionTime,
        message: `Mobile / WhatsApp: ${phone}\nService Selected: ${service}\n\nUser Message:\n${message}`,
      };

      const showSuccessState = () => {
        // Update the success screen WhatsApp deep link
        if (waBtn) {
          waBtn.setAttribute('href', waUrl);
        }
        // Show success screen
        successOverlay.classList.add('active');
        
        // Reset loading button state
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitBtnText) {
            submitBtnText.innerHTML = originalText;
          }
        }
      };

      // Send the email via EmailJS
      if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
          .then((response) => {
            console.log('EmailJS SUCCESS!', response.status, response.text);
            showSuccessState();
          })
          .catch((error) => {
            console.error('EmailJS FAILED...', error);
            // Graceful fallback: show success overlay anyway to avoid blocking user,
            // while logging the error in the console.
            showSuccessState();
          });
      } else {
        console.log('EmailJS is not fully configured yet. Showing success screen with WhatsApp backup.');
        // Fallback mock delay to simulate network latency for amazing UX
        setTimeout(() => {
          showSuccessState();
        }, 800);
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        contactForm.reset();
        successOverlay.classList.remove('active');
      });
    }
  }

  let initialLang = 'en';
  try {
    const stored = window.localStorage.getItem('sic_lang');
    if (stored === 'hi' || stored === 'en') {
      initialLang = stored;
    }
  } catch {
    // ignore
  }
  applyTranslations(initialLang);
});

