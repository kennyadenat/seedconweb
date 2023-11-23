"use strict";

app.controller("PanelistController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  "$sce",
  function ($scope, $http, $timeout, SweetAlert, $sce) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("id");

    if (name) {
      // Use the parameter value as needed
      findItemById(name);

      console.log("profile", $scope.profile);
    } else {
      window.location.href = `speakers.html`;
    }

    // Function to filter array by id
    function findItemById(itemId) {
      $scope.panelistList = [
        {
          id: "1",
          title: "Mr",
          firstname: "Kabir",
          lastname: "Ademoh",
          position: "Nigeria Country Lead",
          org: "Netherlands-African Business Council",
          bio: `<p>Kabir Ademoh is the project coordinator for the NABC’s Seeds For Change (S4C) Project in Nigeria which aims to help Nigerian farmers enhance their yield and quality of produce through high-quality hybrid vegetable seeds and biological crop protection and backed by world-class training and expertise in horticultural production.</p>
        <p>Seed For Change (S4C) is an initiative supported by the government of the Netherlands that works in close collaboration with the Dutch Embassy office and six global leaders in vegetable seeds and biological protection. S4C is implemented by the Netherlands African Business Council (NABC) from within Kano and has reached over 500 vegetable farmers with over 30 variety assortments  demonstrated in the past year.</p>`,
          image: "assets/img/panelist/kabir.jpg",
        },
        {
          id: "2",
          title: "Dr",
          firstname: "Akintoye",
          lastname: "Olagbaju",
          position: "Chief Research Scientist, The Durable Crops Department",
          org: "Nigerian Stored Products Research Institute",
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
            "Chief Research Scientist (Postharvest Entomologist), The Durable Crops Department",
          org: "Nigerian Stored Products Research Institute",
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
          org: "International Union for the Protection of New Varieties of Plants (UPOV)",
          bio: `<p>Agronomic Engineer and Agribusiness Administrator, specializing in plant breeding, Rezende Taveira Leontino serves as the Director spearheading the international development of the UPOV Plant Variety Protection System. With a wealth of experience, he has been an integral part of UPOV since 2012, overseeing its global initiatives</p>
        <p>Prior to his current role, Leontino held key positions at the Ministry of Agriculture in Brazil, contributing significantly to the advancement of plant variety protection and trade. His expertise extends to collaborations with horticultural production companies in both Brazil and Spain.</p>`,
          image: "assets/img/panelist/leontino.jpg",
        },
        {
          id: "5",
          title: "Mr",
          firstname: "David",
          lastname: "Wainaina",
          position: "Program Manager",
          org: "Resourced",
          bio: `<p>With a rich background spanning over two decades in business development across Sub-Saharan Africa, David is deeply passionate about empowering smallholder farmers through innovative products and technologies. Recognized as a skilled networker and community builder, David specialize in fostering cross-sector collaborations that drive program success.</p>
        <p>Currently managing the IMAGE and SMIA programs in Eastern Africa and Nigeria, He collaborates with high-level stakeholders to facilitate the monitoring, adoption, and turnover of new and improved seed varieties. Before joining Resourced, He successfully led diverse business and commercial operations in Tropical Africa, including seed variety development in targeted R&D sites.</p>
        <p>His expertise also extends to the pharmaceutical and public health sectors, where He engages with various stakeholders, including the private sector, government, donors, and implementing partners. This multifaceted experience enables him to contribute to the management and successful outcome of strategic projects across multiple countries.</p>
        <p>Fluent in Swahili, English, and French, with advanced proficiency in Portuguese, He holds an MBA and a BCom from the University of Pune in India.</p>
        `,
          image: "assets/img/panelist/david.jpg",
        },
        {
          id: "6",
          title: "Dr",
          firstname: "Ibitoye",
          lastname: "Oyewale",
          position: "Chief Executive Officer",
          org: "Premier Seed Nigeria Limited",
          bio: `
        <p>Dr. Ibitoye Oyewale is a highly accomplished professional with a rich educational background and extensive experience in the fields of accounting, banking, finance, and information technology. Holding a Bachelor's degree in Accounting from the University of Ado Ekiti, a Master's degree in Banking and Finance from Ahmadu Bello University, Zaria, and a Doctorate degree in Information Technology and Strategic Management from Liberal Bilingual University, Togo, he has demonstrated a commitment to continuous learning and academic excellence. As a fellow of multiple prestigious institutes, including the Institute of Chartered Accountant of Nigeria and the Chartered Institute of Information and Strategy Management, he exemplifies a high level of expertise in his domains.</P>
        <p>Throughout his career, Dr. Ibitoye has proven to be a consummate technocrat and trailblazer, excelling in various roles related to internal control, audit, finance, financial control, operations, and seed business management. His leadership journey with Premier Seed Nigeria Limited began in 2009 as an Internal Auditor, and over the years, he ascended through the ranks, eventually becoming the Managing Director/CEO in May 2023. His ascent attests to his prowess in strategy management, financial administration, and overall organizational leadership. Dr. Ibitoye is known for his commitment to diversity, flexibility in alliances, and his genuine appreciation for his team members.</p>
        <p>Aside from his professional achievements, Dr. Ibitoye is a recipient of numerous honors and distinctions, reflecting his contributions to financial management, leadership, and positive change. As a mentor, he has dedicated decades to inspiring others, participating in various seminars, workshops, and conferences both locally and internationally. His interests extend beyond the professional realm, encompassing a love for reading, sports, and counseling. Happily married and blessed with children, Dr. Ibitoye Oyewale embodies a holistic approach to life, combining professional success with personal fulfillment.</p>
        `,
          image: "assets/img/panelist/ibitoye.jpg",
        },
      ];

      var filteredItems = $scope.panelistList.filter(function (item) {
        return item.id === itemId;
      });

      // If an item is found, assign it to the scope variable
      $scope.profile = filteredItems.length > 0 ? filteredItems[0] : null;
    }

    $scope.trustAsHtml = function (html) {
      return $sce.trustAsHtml(html);
    };
  },
]);
