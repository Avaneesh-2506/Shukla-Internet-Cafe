document.addEventListener('DOMContentLoaded', () => {
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
        'New PAN card application with correct information, photo, and signature as per the latest rules.',
      service_pan_new_point_1: 'Form filling &amp; data entry',
      service_pan_new_point_2: 'Document check &amp; guidance',
      service_pan_new_point_3: 'Online payment support',
      service_pan_new_cta: 'WhatsApp about PAN Application',
      service_pan_correction_title: 'PAN Correction / Update',
      service_pan_correction_body:
        'Correction of name, date of birth, address and other PAN details with proper proof and tracking.',
      service_pan_correction_point_1: 'Name / DOB / Address correction',
      service_pan_correction_point_2: 'Re-issue PAN card',
      service_pan_correction_point_3: 'Status tracking assistance',
      service_pan_correction_cta: 'WhatsApp about PAN Correction',
      service_govt_title: 'Govt Certificates',
      service_govt_body:
        'Online application support for income, caste, domicile and other certificates as per your state portal.',
      service_govt_point_1: 'Income Certificate',
      service_govt_point_2: 'Caste Certificate',
      service_govt_point_3: 'Domicile / Residence Certificate',
      service_govt_cta: 'WhatsApp about Govt Certificates',
      service_ration_title: 'Ration Card Services',
      service_ration_body:
        'New ration card, member addition/removal, address change and other related services.',
      service_ration_point_1: 'New ration card application',
      service_ration_point_2: 'Update / correction',
      service_ration_point_3: 'Online status checking',
      service_ration_cta: 'WhatsApp about Ration Card',
      service_online_title: 'Online Forms &amp; Applications',
      service_online_body:
        'Filling and submission of all types of online forms – government, college, scholarship, exam and more.',
      service_online_point_1: 'Government scheme forms',
      service_online_point_2: 'College / exam registration',
      service_online_point_3: 'Scholarship &amp; application forms',
      service_online_cta: 'WhatsApp about Online Forms',
      service_other_title: 'Other Internet Cafe Services',
      service_other_body:
        'Standard internet cafe facilities as needed for day-to-day work in the Indian market.',
      service_other_point_1: 'Print, scan &amp; photocopy, lamination',
      service_other_point_2: 'Online payments &amp; ticket booking',
      service_other_point_3: 'Email, resume, and document typing',
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
        'All services are provided as per the latest government guidelines. Please carry original documents and photocopies where required.',
      service_courier_title: 'Courier Service (DTDC Partner)',
      service_courier_body:
        'Book domestic and selected international DTDC courier consignments directly from our counter with proper tracking and receipts.',
      service_courier_point_1: 'DTDC parcel booking and tracking help',
      service_courier_point_2: 'Packing guidance for important documents',
      service_courier_point_3: 'Pickup information and delivery status support',
      service_courier_cta: 'WhatsApp about DTDC Courier',
      about_title: 'About Shukla Internet Cafe',
      about_subtitle:
        'Shukla Internet Cafe in Sahson, Prayagraj has been helping students, working professionals and families with reliable online and government related services.',
      about_who_heading: 'Who We Are',
      about_who_body:
        'We are a trusted digital service centre focused on making online work easy for everyone – from PAN and certificates to forms, payments and printing.',
      about_why_heading: 'Why People Prefer Us',
      about_why_point_1: 'Clear explanation of documents required for each service',
      about_why_point_2: 'Honest guidance for government and online procedures',
      about_why_point_3: 'WhatsApp support for quick questions and status updates',
      about_courier_heading: 'DTDC Courier Partner',
      about_courier_body:
        'As a DTDC courier service point, we help you send important documents and parcels with trusted logistics support, booking receipts and tracking assistance.',
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
        'नए पैन कार्ड के लिए सही जानकारी, फोटो और सिग्नेचर के साथ आवेदन, नियमों के अनुसार।',
      service_pan_new_point_1: 'फॉर्म भरना और डेटा एंट्री',
      service_pan_new_point_2: 'दस्तावेज़ जाँच और मार्गदर्शन',
      service_pan_new_point_3: 'ऑनलाइन पेमेंट सहायता',
      service_pan_new_cta: 'फ्रेश पैन के लिए व्हाट्सऐप करें',
      service_pan_correction_title: 'पैन करेक्शन / अपडेट',
      service_pan_correction_body:
        'नाम, जन्मतिथि, पता और अन्य पैन विवरण में सुधार, सही दस्तावेज़ों के साथ।',
      service_pan_correction_point_1: 'नाम / DOB / पता करेक्शन',
      service_pan_correction_point_2: 'पैन कार्ड री-इश्यू',
      service_pan_correction_point_3: 'स्टेटस ट्रैकिंग सहायता',
      service_pan_correction_cta: 'पैन करेक्शन के लिए व्हाट्सऐप करें',
      service_govt_title: 'सरकारी प्रमाण पत्र',
      service_govt_body:
        'आय, जाति, निवास और अन्य प्रमाण पत्रों के लिए ऑनलाइन आवेदन, आपके राज्य पोर्टल के अनुसार।',
      service_govt_point_1: 'आय प्रमाण पत्र',
      service_govt_point_2: 'जाति प्रमाण पत्र',
      service_govt_point_3: 'निवास / रेज़िडेंस प्रमाण पत्र',
      service_govt_cta: 'सरकारी प्रमाण पत्र के लिए व्हाट्सऐप करें',
      service_ration_title: 'राशन कार्ड सेवाएँ',
      service_ration_body:
        'नया राशन कार्ड, सदस्य जोड़ना/हटाना, पता परिवर्तन और अन्य संबंधित सेवाएँ।',
      service_ration_point_1: 'नया राशन कार्ड आवेदन',
      service_ration_point_2: 'अपडेट / करेक्शन',
      service_ration_point_3: 'ऑनलाइन स्टेटस देखना',
      service_ration_cta: 'राशन कार्ड सेवाओं के लिए व्हाट्सऐप करें',
      service_online_title: 'ऑनलाइन फॉर्म और आवेदन',
      service_online_body:
        'सरकारी, कॉलेज, छात्रवृत्ति, परीक्षा आदि के सभी प्रकार के ऑनलाइन फॉर्म भरना और सबमिट करना।',
      service_online_point_1: 'सरकारी योजनाओं के फॉर्म',
      service_online_point_2: 'कॉलेज / परीक्षा पंजीकरण',
      service_online_point_3: 'छात्रवृत्ति और अन्य आवेदन फॉर्म',
      service_online_cta: 'ऑनलाइन फॉर्म के लिए व्हाट्सऐप करें',
      service_other_title: 'अन्य इंटरनेट कैफे सेवाएँ',
      service_other_body:
        'रोज़मर्रा के कामों के लिए ज़रूरी सभी सामान्य इंटरनेट कैफे सुविधाएँ।',
      service_other_point_1: 'प्रिंट, स्कैन और फोटोकॉपी, लैमिनेशन',
      service_other_point_2: 'ऑनलाइन पेमेंट और टिकट बुकिंग',
      service_other_point_3: 'ईमेल, रिज़्यूमे और डॉक्यूमेंट टाइपिंग',
      service_other_cta: 'अन्य सेवाओं के लिए व्हाट्सऐप करें',
      service_courier_title: 'कूरियर सेवा (DTDC पार्टनर)',
      service_courier_body:
        'हमारे काउंटर से ही देश के भीतर और चुनिंदा अंतरराष्ट्रीय DTDC कूरियर बुक करें, ट्रैकिंग और रसीद के साथ।',
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
        'सभी सेवाएँ नवीनतम सरकारी दिशा-निर्देशों के अनुसार दी जाती हैं। कृपया आवश्यक मूल दस्तावेज़ और फोटोकॉपी साथ लाएँ।',
      about_title: 'शुक्ला इंटरनेट कैफे के बारे में',
      about_subtitle:
        'सहसोन, प्रयागराज स्थित शुक्ला इंटरनेट कैफे वर्षों से छात्रों, नौकरीपेशा लोगों और परिवारों की विश्वसनीय ऑनलाइन और सरकारी सेवाओं में मदद कर रहा है।',
      about_who_heading: 'हम कौन हैं',
      about_who_body:
        'हम एक विश्वसनीय डिजिटल सर्विस सेंटर हैं, जहाँ पैन और प्रमाण पत्रों से लेकर फॉर्म, पेमेंट और प्रिंटिंग तक का काम आसानी से कराया जाता है।',
      about_why_heading: 'लोग हमें क्यों पसंद करते हैं',
      about_why_point_1: 'हर सेवा के लिए जरूरी दस्तावेज़ों की साफ़ जानकारी',
      about_why_point_2: 'सरकारी और ऑनलाइन प्रक्रिया के लिए ईमानदार मार्गदर्शन',
      about_why_point_3: 'तेज़ सवालों और स्टेटस अपडेट के लिए व्हाट्सऐप सहायता',
      about_courier_heading: 'DTDC कूरियर पार्टनर',
      about_courier_body:
        'DTDC कूरियर सर्विस प्वाइंट के रूप में हम आपके महत्वपूर्ण दस्तावेज़ों और पार्सल को सुरक्षित तरीके से भेजने, बुकिंग रसीद और ट्रैकिंग में मदद करते हैं।',
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

    if (langLabel) {
      langLabel.textContent = lang === 'hi' ? 'हिं' : 'EN';
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

