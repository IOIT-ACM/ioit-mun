const year = new Date().getFullYear();

export default {
  "settings": {
    "formspreeURL": "https://formspree.io/f/myyqbpqq",
    "mailchimp": {
      "url": "",
      "key": ""
    }
  },
  "header": {
    "logo": {
      "text": "IOIT MUN",
      "url": "/img/hero/mun.png",
      "url2": "/img/hero/ioitmun.png",
      "url3": "/img/hero/mun2.png",
      "url4": "/img/hero/ioitmun2.png",
      "accent": ""
    },
    "menu": [
      {
        "label": "Home",
        "link": "/",
        "children": []
      },
      {
        "label": "Committees",
        "link": "#.",
        "children": [
          { "label": "ICW", "link": "/icw" },
          { "label": "UNCSW", "link": "/uncsw" },
          { "label": "UNSC", "link": "/unsc" },
          { "label": "AIPPM", "link": "/aippm" },
          { "label": "WTO", "link": "/wto" },
        ]
      },
      {
        "label": "Newsletter",
        "link": "#.",
        "children": [
          {
            "label": 2025,
            "link": "https://drive.google.com/file/d/1KkG7dR_6oTYN4YPEFijmY1KkZUxYHSH3/view?usp=sharing"
          },
          {
            "label": 2024,
            "link": "https://drive.google.com/file/d/1iU8YuglSMDZts1aawuNMd4zadD_mew3d/view?usp=sharing"
          },
          {
            "label": 2023,
            "link": "https://drive.google.com/file/d/13lmwCpRqGLJcrz9oigoFa30jJRpMsgIO/view?usp=share_link"
          }
        ]
      },
      {
        "label": `TENET ${year}`,
        "link": "https://www.ioittenet.com/",
        "children": []
      }
    ]
  },
  "footer": {
    "logo": {
      "text": "AISSMS IOIT",
      "accent": ` MUN' ${year.toString().slice(-2)}`,
      "image1": "/img/hero/ioitAcm.webp",
      "image2": "/img/hero/mun12.png"
    },
    "description": "",
    "menu": [
      { "label": "Homepage", "link": "/" },
      { "label": "Secretariat", "link": "/secretariat" },
      { "label": "Gallery", "link": "/gallery" },
      { "label": `TENET ${year}`, "link": "https://ioittenet.com/" }
    ],
    "links": [
      { "label": "Terms", "link": "#." },
      { "label": "Careers", "link": "#." },
      { "label": "Privacy Policy", "link": "#." },
      { "label": "Help Center", "link": "#." }
    ],
    "copy": `© ${year} IOIT MUN. All Rights Reserved.`,
    "dev": "Developed by: IOIT ACM Student Chapter",
    "instagram": {
      "images": [
        "/img/content/instagram-2/1.jpg",
        "/img/content/instagram-2/2.jpg",
        "/img/content/instagram-2/3.jpg",
        "/img/content/instagram-2/4.jpg",
        "/img/content/instagram-2/5.jpg",
        "/img/content/instagram-2/6.jpg"
      ],
      "button": {
        "label": "Our Instagram",
        "link": "https://www.instagram.com/ioit_mun"
      }
    }
  },
  "contacts": {
    "email": "ioit.mun@aissmsioit.org",
    "tel": "+91 8275167708",
    "name": "Jeevika Agrawal"
  },
  "social": [
    {
      "link": "https://www.linkedin.com/company/ioit-mun/",
      "icon": "fab fa-linkedin-in",
      "title": "Facebook"
    },
    {
      "link": "https://www.instagram.com/ioit_mun",
      "icon": "fab fa-instagram",
      "title": "Instagram"
    }
  ]
}
