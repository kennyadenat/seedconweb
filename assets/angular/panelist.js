"use strict";

app.controller("PanelistController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  function ($scope, $http, $timeout, SweetAlert) {
    $scope.panelistList = [
      {
        id: "1",
        title: "Mr",
        firstname: "Kabir",
        lastname: "Ademoh",
        position: "Country Lead, Netherlands-African Business Council",
        bio: `<p>Kabir Ademoh is the project coordinator for the NABC’s Seeds For Change (S4C) Project in Nigeria which aims to help Nigerian farmers enhance their yield and quality of produce through high-quality hybrid vegetable seeds and biological crop protection and backed by world-class training and expertise in horticultural production.</p>
        <p>Seed For Change (S4C) is an initiative supported by the government of the Netherlands that works in close collaboration with the Dutch Embassy office and six global leaders in vegetable seeds and biological protection. S4C is implemented by the Netherlands African Business Council (NABC) from within Kano and has reached over 500 vegetable farmers with over 30 variety assortments  demonstrated in the past year.</p>`,
        image: "assets/img/panelist/kabir.jpg",
      },
      {
        id: "2",
        title: "Dr",
        firstname: "Akintoye",
        lastname: "Olagbaju",
        position:
          "Chief Research Scientist, The Durable Crops Department (NSPRI)",
        bio: `<p>Akintoye Olagbaju is a Chief Research Scientist (Postharvest Entomologist) in the Durable Crops Research Department at the Nigerian Stored Products Research Institute (NSPRI), Headquarters, Ilorin, Kwara State, Nigeria. He has been working on storage insect pest’s management for more than 25 years in grain, oil seeds and beverages postharvest research at NSPRI.</p>
        <p>He was the program leader for grains and pulses and is currently the Programme Leader for Oil seeds and beverage crops in NSPRI. He has extensive research interests in the prevention and control of insect pests of stored agricultural crops and outreach services; using integrated pest management and biological control methods. He has led, facilitated and participated in research and stakeholders’ trainings on good postharvest management practices. He has authored and co-authored a number of technical publications to his credit</p>`,
        image: "assets/img/panelist/akintoye.jpg",
      },
      {
        id: "3",
        title: "Dr",
        firstname: "Grace",
        lastname: "Otitodun",
        position:
          "Chief Research Scientist (Postharvest Entomologist), The Durable Crops Department (NSPRI)",
        bio: `<p>Dr Grace O. Otitodun is a Chief Research Scientist (Postharvest Entomologist) in the Durable Crops Research Department at the Nigerian Stored Products Research Institute (NSPRI), Headquarters, Ilorin, Kwara State, Nigeria. She has over 20 years’ experience in grain postharvest research at NSPRI. She is the Programme Leader for Cereals and Pulses Programme in NSPRI. Grace Otitodun is a Fellow of Norman Borlaug Scientific Exchange Program and a Fellow of Nigerian Science Leadership Program.</p>
        <p>Her broad research and extension interest are integrated pest management and biological control of stored products pests. She has participated in donor (International and local) funded research projects serving as Lead Principal Investigator and also as facilitator in stakeholders trainings on good postharvest agricultural practices. She has authored and co-authored quite a number of technical publications to her credit. (ORCID ID - https://orcid.org/0000-0001-8183-1698).</p>`,
        image: "assets/img/panelist/grace.jpg",
      },
      {
        id: "4",
        title: "Mr",
        firstname: "Rezende",
        lastname: "Leontino",
        position:
          "Director, Developing Internationally The UPOV Plant Variety Protection System",
        bio: `<p>Agronomic Engineer and Agribusiness Administrator, specializing in plant breeding, Rezende Taveira Leontino serves as the Director spearheading the international development of the UPOV Plant Variety Protection System. With a wealth of experience, he has been an integral part of UPOV since 2012, overseeing its global initiatives</p>
        <p>Prior to his current role, Leontino held key positions at the Ministry of Agriculture in Brazil, contributing significantly to the advancement of plant variety protection and trade. His expertise extends to collaborations with horticultural production companies in both Brazil and Spain.</p>`,
        image: "assets/img/panelist/leontino.jpg",
      },
      {
        id: "5",
        title: "Mr",
        firstname: "David",
        lastname: "Wainaina",
        position: "Program Manager, Resourced",
        bio: `<p>With a rich background spanning over two decades in business development across Sub-Saharan Africa, David is deeply passionate about empowering smallholder farmers through innovative products and technologies. Recognized as a skilled networker and community builder, David specialize in fostering cross-sector collaborations that drive program success.</p>
        <p>Currently managing the IMAGE and SMIA programs in Eastern Africa and Nigeria, He collaborates with high-level stakeholders to facilitate the monitoring, adoption, and turnover of new and improved seed varieties. Before joining Resourced, He successfully led diverse business and commercial operations in Tropical Africa, including seed variety development in targeted R&D sites.</p>
        <p>His expertise also extends to the pharmaceutical and public health sectors, where He engages with various stakeholders, including the private sector, government, donors, and implementing partners. This multifaceted experience enables him to contribute to the management and successful outcome of strategic projects across multiple countries.</p>
        <p>Fluent in Swahili, English, and French, with advanced proficiency in Portuguese, He holds an MBA and a BCom from the University of Pune in India.</p>
        `,
        image: "assets/img/panelist/david.jpg",
      },
    ];

    $scope.viewProfile = function (id) {
      const encodedName = encodeURIComponent(id);
      window.location.href = `profile.html?id=${encodedName}`;
    };
  },
]);
