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
          org: "Resourced Global",
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
        {
          id: "7",
          title: "Mr",
          firstname: "Michael",
          lastname: "Keller",
          position: "Secretary General",
          org: "International Seed Federation",
          bio: `
        <p>Michael Keller was appointed Secretary General of the International Seed Federation in June 2014</P>
        <p>Michael, a German national, lived and worked in Paris for 18 years before relocating to Switzerland to join the International Seed Federation in Nyon</p>
        <p>Having graduated from the University of Manheim where he completed a Master’s degree in European Law, Michael pursued post-graduate studies in Political Science</p>
        <p>In 1999 Michael joined the French Senate in Paris as a Parliamentary Advisor and moved to the Mayor’s Association of France where, as Head of European and International Affairs, he represented his constituents’ interests at European level</p>
        <p>Between 2008 and 2014 Michael held the post of Director of Regulatory and Public Affairs at DuPont Pioneer in France. During the same period Michael was a member of the Board of Directors at the Union Française des Semenciers (UFS) and Chairman of the UFS Regulation and Innovation Commission</p>
        `,
          image: "assets/img/panelist/micheal.jpg",
        },
        {
          id: "8",
          title: "Dr",
          firstname: "Kouamé",
          lastname: "Miézan",
          position: "Executive Director",
          org: "Africa Seeds",
          bio: `
        <p>On the 12 December 2013, Dr. Kouamé Miézan was appointed as the Executive Director, with the mission to strengthen the activities of the Network. Dr. Miézan, a plant breeder by training, began his career at the Institute of Research for Development (IRD), then at AfricaRice (formerly WARDA) as a senior rice breeder. He served thereafter several management and coordination positions in regional and international organizations (AfricaRice, FAO).</P>
        <p>Holding a PhD in Plant Breeding and Genetics from Kansas State University (USA), Dr. Miézan has a proven expertise and experience in breeding programs and in the seed sector, as well as in the design and management of programs and projects for research and development. He also has experience in the development of inter-institutional relations. Dr. Miézan has been member of many research networks on rice.</p>       
        `,
          image: "assets/img/panelist/kouame.jpg",
        },
        {
          id: "9",
          title: "Dr",
          firstname: "Audu",
          lastname: "Grema",
          position: "Senior Program Officer, Agriculture",
          org: "Bill & Melinda Gates Foundation (BMGF)",
          bio: `
        <p>Audu Grema is senior manager for agriculture for the Gates Foundation. Based in Nigeria, he previously worked in the United Kingdom's Department for International Development, originally as agricultural advisor and transitioning to aid management. He has B.S. and M.S. degrees from universities in Nigeria, as well as a Ph.D. from Cranfield University.</P>       
        `,
          image: "assets/img/panelist/grema.jpg",
        },
        {
          id: "10",
          title: "Mr",
          firstname: "Mark",
          lastname: "Nelson",
          position: "Managing Director",
          org: "Resourced Global",
          bio: `
        <p>Mark Nelson is a seasoned Managing Director with over 8 years and 2 months of experience at CGD, a non-governmental entity based in Mahomet, Illinois, dedicated to supporting grant-making donors in implementing complex agricultural development initiatives. Mark played a crucial role in founding CGD, leveraging commercial expertise to design and implement multi-stakeholder programs that significantly impact the livelihoods of smallholder farmers and value chain entrepreneurs. His leadership style involves managing diverse teams, fostering partnerships, and ensuring timely development outcomes to meet the growing global demand for food, feed, fiber, and renewable energy.</p>
        <p>One of Mark's notable achievements is his current leadership in a two-year $USD 4 million program funded by the Bill and Melinda Gates Foundation. This initiative aims to enhance agricultural productivity for smallholder farmers in Burkina Faso, Mali, and Nigeria by addressing constraints and improving understanding of key factors in crop investment decisions, focusing on sorghum and pearl millet cultivation. Additionally, Mark directs CGD's involvement in a four-year $USD 11.6 million project, also funded by the Gates Foundation, focused on sustainably improving farmers' access to high-quality and affordable cassava planting materials through the development and promotion of commercial models for seed provision.</P>
        <p>Mark's approach is characterized by a results-oriented mindset, integrating commercial expertise with a deep understanding of development challenges in agricultural systems. His commitment to fostering productive public-private partnerships and his strategic vision position him as a respected leader in the agricultural development sector, contributing to positive change and long-term opportunities in the industry.</p>
        `,
          image: "assets/img/panelist/mark.jpg",
        },
        {
          id: "11",
          title: "Dr",
          firstname: "Marja",
          lastname: "Thijssen",
          position: "Senior advisor in agrobiodiversity and seed systems",
          org: "Wageningen University & Research",
          bio: `
        <p>Dr. Marja Thijssen is senior advisor genetic resources and seed systems at the Centre for Development Innovation (CDI) of Wageningen University and Research centre in the Netherlands. At CDI she coordinates a multi-disciplinary team of professionals working on Integrated Seed Sector Development (ISSD)</p>
        <p>Marja coordinates the programme in Ethiopia. In addition she coordinates the continental ISSD Africa initiative. This initiative aims to work on complex challenges of strategic importance to the seed sector that are dicult to tackle at national level. The initiative aims to establish an African-embedded structure and network of experts, seed programmes and associated organizations</P>       
        <p> Marja holds an MSc in Plant Breeding and a PhD in Plant Cell Biology, both from Wageningen University. She has more than 15 years of experience working in development projects and international trainings on agrobiodiversity management, crop improvement and seed sector development in Africa, Latin America and South Asia.</p>
        `,
          image: "assets/img/panelist/marja.jpg",
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
