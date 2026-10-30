// Publication list, rendered by publications.html.
// Source: Google Scholar (Oct 2026), deduplicated and cleaned by hand.
// type: conf | journal | workshop | preprint | thesis   lang: 'fr' for French papers
// page: optional link to a local paper page with notes and figures
const PUBLICATIONS = [
  // 2026
  { year: 2026, type: 'workshop', theme: 'cultural', title: 'Pluralistic Annotation of Cultural Weaponization on Wikipedia: A Multi-Annotator Case Study across Ukraine and Armenia', authors: 'C. Hamdane, H. Perekhoda, E. Boros, S. Prezioso, H. Tamrazyan', venue: 'First Workshop on Pluralistic AI NLP, 2026', short: 'Pluralistic AI NLP' },
  { year: 2026, type: 'conf', theme: 'historical', title: 'Beyond Single-Negative Preference: Multi-Negative DPO for LLM-Centric Historical Entity Linking', authors: 'T. N. Nguyen, E. Boros, A. Hamdi, A. Jatowt, M. Coustaty, A. Doucet', venue: 'Findings of EMNLP 2026' },
  { year: 2026, type: 'preprint', theme: 'noisy', title: 'OCR Post-Correction in the Age of LLMs: A Survey of Historical Document Processing', authors: 'E. Boros, A. Hamdi, W. Sun, T. N. Nguyen, M. Coustaty, A. Doucet', venue: 'Survey, 2026' },
  { year: 2026, type: 'workshop', theme: 'multimodal', title: 'When Superpixels Fail on Documents: A Study of Segmentation for LIME Explanations', authors: 'Q. Telnoff, E. Boros, M. Coustaty, R. Jarry, F. Crohas, A. Doucet', venue: 'XAI Workshop @ IJCAI 2026', short: 'XAI @ IJCAI' },
  { year: 2026, type: 'conf', home: true, theme: 'historical', title: 'One Model, Many Guidelines: Instruction Fine-Tuning for Historical Named Entity Recognition', authors: 'T. N. Nguyen, E. Boros, A. Jatowt, M. Coustaty, A. Hamdi, A. Doucet', venue: 'ICDAR 2026' },
  { year: 2026, type: 'conf', home: true, theme: 'cultural', title: 'A Dataset of Cultural Heritage Manipulation on English Wikipedia in the Russo–Ukrainian Context', authors: 'M. Garambois, H. Tamrazyan, E. Boros', venue: 'SIGIR 2026', page: 'papers/2026-a-dataset-of-cultural-heritage-manipulation-on-english-wikipedia-in-the-rus.html' },
  { year: 2026, type: 'conf', home: true, theme: 'applied', title: 'Apertus: Democratizing Open and Compliant LLMs for Global Language Environments', authors: 'A. Hernández-Cano, A. Hägele, A. H. Huang, A. Romanou, A. J. Solergibert, et al. (incl. E. Boros)', venue: 'ACL 2026', cited: 67, page: 'papers/2026-apertus-democratizing-open-and-compliant-llms-for-global-language-environme.html' },
  { year: 2026, type: 'conf', theme: 'historical', title: 'CLEF HIPE-2026: Evaluating Accurate and Efficient Person–Place Relation Extraction from Multilingual Historical Texts', authors: 'J. Opitz, C. Raclé, E. Boros, A. Michail, M. Romanello, M. Ehrmann, et al.', venue: 'ECIR 2026', cited: 9 },
  { year: 2026, type: 'workshop', theme: 'historical', title: 'Extended Overview of HIPE-2026: Evaluating Accurate and Efficient Person–Place Relation Extraction from Multilingual Historical Texts', authors: 'J. Opitz, M. Ehrmann, C. Raclé, A. Michail, M. Romanello, E. Boros, S. Gabay, et al.', venue: 'CLEF 2026', cited: 15 },
  { year: 2026, type: 'workshop', theme: 'noisy', title: 'ICDAR 2026 HIPE-OCRepair Competition on LLM-Assisted OCR Post-Correction for Historical Documents', authors: 'M. Ehrmann, E. Boros, J. Opitz, A. Michail, F. Wagner, S. Clematide', venue: 'ICDAR 2026 Competition · arXiv:2607.08143', cited: 2 },
  { year: 2026, type: 'workshop', theme: 'semantic', title: 'L3IRIT at SemEval-2026 Task 4: Learning Narrative Similarity from Aligned Film Plot Summaries', authors: 'A. Hamdi, E. Boros, J. G. Moreno, A. Jatowt, G. Bordea, et al.', venue: 'SemEval 2026', cited: 1 },
  { year: 2026, type: 'workshop', theme: 'cultural', title: 'Armenian AutoEpiDoc: Automated Extraction and Encoding of Armenian Inscriptions into EpiDoc TEI/XML', authors: 'H. Tamrazyan, E. Cornamusaz, E. Boros', venue: 'LaTeCH-CLfL 2026', cited: 1, page: 'papers/2026-armenian-autoepidoc-automated-extraction-and-encoding-of-armenian-inscripti.html' },
  { year: 2026, type: 'workshop', theme: 'cultural', title: 'From Corpus to Concept Scheme: Developing a SKOS Vocabulary for Armenian Epigraphic Heritage', authors: 'H. Tamrazyan, K. Nour, E. Boros', venue: 'LaTeCH-CLfL 2026', page: 'papers/2026-building-a-skos-vocabulary-for-armenian-epigraphy-a-corpus-driven-and-nlp-a.html' },
  { year: 2026, type: 'conf', theme: 'historical', title: 'Data Augmentation for Historical NER: A Systematic Comparison of Lexical and LLM-based Approaches', authors: 'L. Blinière, M. Ehrmann, E. Boros, S. Clematide, F. Kaplan', venue: 'SwissText 2026' },
  { year: 2026, type: 'journal', theme: 'cultural', title: 'Linguistic Mechanisms of Cultural Heritage Weaponization in Digital Encyclopedic Discourse: Evidence from Wikipedia Revision Corpora', authors: 'H. S. Tamrazyan, M. Garambois, E. Boros', venue: 'Scientific Journal of Dragomanov Ukrainian State University, Series 9' },
  { year: 2026, type: 'preprint', theme: 'cultural', title: 'ArmEpiC – Armenian Epigraphic Corpus (ArtsakhEpiC Sub-Corpus)', authors: 'H. Tamrazyan, G. Hovhannisyan, A. Harutyunyan, E. Boros', venue: 'Dataset · Zenodo' },
  { year: 2026, type: 'conf', theme: 'semantic', lang: 'fr', title: 'Appariement de trames narratives : dépasser le chevauchement lexical en recherche d’information', authors: 'A. Hamdi, E. Boros, J. G. Moreno, A. Doucet', venue: 'CORIA 2026' },
  // 2025
  { year: 2025, type: 'conf', theme: 'historical', title: 'A Study of Temporal Fusion Strategies for Named Entity Recognition in Historical Texts', authors: 'E. Boros', venue: 'TPDL 2025', page: 'papers/2025-a-study-of-temporal-fusion-strategies-for-named-entity-recognition-in-histo.html' },
  { year: 2025, type: 'conf', theme: 'cultural', title: 'Corpus-Based SKOS Development for Underrepresented and Endangered Ukrainian Epigraphic Heritage', authors: 'H. Tamrazyan, E. Boros', venue: 'Digital Heritage 2025' },
  { year: 2025, type: 'conf', theme: 'cultural', title: 'Corpus-Based SKOS Development for Ukrainian Epigraphy: A Digital Approach to Preserving Heritage', authors: 'H. Tamrazyan, E. Boros', venue: 'DH2025 · presentation' },
  // 2024
  { year: 2024, type: 'workshop', home: true, theme: 'noisy', title: 'Post-Correction of Historical Text Transcripts with Large Language Models: An Exploratory Study', authors: 'E. Boros, M. Ehrmann, M. Romanello, S. Najem-Meyer, F. Kaplan', venue: 'LaTeCH-CLfL 2024', cited: 85 },
  { year: 2024, type: 'conf', home: true, theme: 'noisy', title: 'Investigating OCR-Sensitive Neurons to Improve Entity Recognition in Historical Documents', authors: 'E. Boros, M. Ehrmann', venue: 'ICADL 2024', cited: 3, page: 'papers/2024-investigating-ocr-sensitive-neurons-to-improve-entity-recognition-in-histor.html' },
  { year: 2024, type: 'conf', theme: 'cultural', title: 'Developing a Standardised Vocabulary for Ukrainian Epigraphy and Expanding Digital Epigraphic Resources', authors: 'H. Tamrazyan, E. Boros, F. Kaplan', venue: 'TPDL 2024', cited: 1, page: 'papers/2024-developing-a-standardised-vocabulary-for-ukrainian-epigraphy-and-expanding.html' },
  { year: 2024, type: 'conf', theme: 'applied', title: 'Swiss AI Initiative – Collecting Large Amounts of High-Quality Data for Training Large Language Models', authors: 'J. M. Deriu, M. Ehrmann, E. Boros, M. Büther, C. Sibille, I. Protsenko, M. Brucka, et al.', venue: 'SwissText 2024' },
  // 2023
  { year: 2023, type: 'conf', home: true, theme: 'historical', title: 'Yes but.. Can ChatGPT Identify Entities in Historical Documents?', authors: 'C. E. González-Gallardo, E. Boros, N. Girdhar, A. Hamdi, J. G. Moreno, et al.', venue: 'JCDL 2023', cited: 77, page: 'papers/2023-yes-but-can-chatgpt-identify-entities-in-historical-documents.html' },
  { year: 2023, type: 'conf', theme: 'historical', title: 'Injecting Temporal-Aware Knowledge in Historical Named Entity Recognition', authors: 'C. E. González-Gallardo, E. Boros, E. Giamphy, A. Hamdi, J. G. Moreno, et al.', venue: 'ECIR 2023', cited: 19, page: 'papers/2023-injecting-temporal-aware-knowledge-in-historical-named-entity-recognition.html' },
  { year: 2023, type: 'conf', theme: 'applied', title: 'Receipt Dataset for Document Forgery Detection', authors: 'B. M. Tornés, T. Taburet, E. Boros, K. Rouis, A. Doucet, P. Gomez-Krämer, et al.', venue: 'ICDAR 2023', cited: 19, page: 'papers/2023-receipt-dataset-for-document-forgery-detection.html' },
  { year: 2023, type: 'conf', theme: 'applied', title: 'Detecting Forged Receipts with Domain-Specific Ontology-Based Entities & Relations', authors: 'B. M. Tornés, E. Boros, A. Doucet, P. Gomez-Krämer, J. M. Ogier', venue: 'ICDAR 2023', cited: 10, page: 'papers/2023-detecting-forged-receipts-with-domain-specific-ontology-based-entities-and.html' },
  { year: 2023, type: 'conf', theme: 'applied', title: 'Analyzing the Impact of Tokenization on Multilingual Epidemic Surveillance in Low-Resource Languages', authors: 'S. Mutuvi, E. Boros, A. Doucet, G. Lejeune, A. Jatowt, M. Odeo', venue: 'ICDAR 2023', cited: 3, page: 'papers/2023-analyzing-the-impact-of-tokenization-on-multilingual-epidemic-surveillance.html' },
  { year: 2023, type: 'conf', theme: 'applied', title: 'An Explorative Guide on How to Detect Forged Car Insurance Claims with Language Models', authors: 'Q. Telnoff, E. Boros, M. Coustaty, F. Crohas, A. Doucet, F. Le Bars', venue: 'KDIR 2023', cited: 1 },
  { year: 2023, type: 'workshop', theme: 'semantic', title: 'L3i++ at SemEval-2023 Task 2: Prompting for Multilingual Complex Named Entity Recognition', authors: 'C. E. González-Gallardo, T. H. H. Tran, N. Girdhar, E. Boros, J. G. Moreno, et al.', venue: 'SemEval 2023', cited: 2 },
  { year: 2023, type: 'conf', theme: 'historical', lang: 'fr', title: 'Oui mais... ChatGPT peut-il identifier des entités dans des documents historiques ?', authors: 'C. E. González-Gallardo, E. Boros, N. Girdhar, A. Hamdi, J. G. Moreno, A. Doucet', venue: 'CORIA-TALN 2023', cited: 1 },
  { year: 2023, type: 'conf', theme: 'historical', lang: 'fr', title: 'Injection de connaissances temporelles dans la reconnaissance d’entités nommées historiques', authors: 'C. E. González-Gallardo, E. Boros, E. Giamphy, A. Hamdi, J. G. Moreno, A. Doucet', venue: 'CORIA-TALN 2023', cited: 1 },
  { year: 2023, type: 'conf', theme: 'applied', lang: 'fr', title: 'Détection de faux tickets de caisse à l’aide d’entités et de relations basées sur une ontologie de domaine', authors: 'B. M. Tornés, E. Boros, P. Gomez-Krämer, A. Doucet, J. M. Ogier', venue: 'CORIA-TALN 2023', cited: 1 },
  { year: 2023, type: 'conf', theme: 'applied', lang: 'fr', title: 'Jeu de données de tickets de caisse pour la détection de fraude documentaire', authors: 'B. M. Tornés, T. Taburet, E. Boros, K. Rouis, P. Gomez-Krämer, N. Sidere, et al.', venue: 'CORIA-TALN 2023', cited: 1 },
  // 2022
  { year: 2022, type: 'journal', home: true, theme: 'noisy', title: 'Assessing the Impact of OCR Noise on Multilingual Event Detection over Digitised Documents', authors: 'E. Boros, N. K. Nguyen, G. Lejeune, A. Doucet', venue: 'International Journal on Digital Libraries 23(3)', short: 'IJDL', cited: 49, page: 'papers/2022-assessing-the-impact-of-ocr-noise-on-multilingual-event-detection-over-digi.html' },
  { year: 2022, type: 'journal', theme: 'historical', title: 'MELHISSA: A Multilingual Entity Linking Architecture for Historical Press Articles', authors: 'E. Linhares Pontes, L. A. Cabrera-Diego, J. G. Moreno, E. Boros, A. Hamdi, et al.', venue: 'International Journal on Digital Libraries 23(2)', short: 'IJDL', cited: 34, page: 'papers/2021-melhissa-a-multilingual-entity-linking-architecture-for-historical-press-ar.html' },
  { year: 2022, type: 'conf', theme: 'semantic', title: 'Exploring Entities in Event Detection as Question Answering', authors: 'E. Boros, J. G. Moreno, A. Doucet', venue: 'ECIR 2022', cited: 5, page: 'papers/2022-exploring-entities-in-event-detection-as-question-answering.html' },
  { year: 2022, type: 'conf', theme: 'applied', title: 'Adapting Transformers for Detecting Emergency Events on Social Media', authors: 'E. Boros, G. Lejeune, M. Coustaty, A. Doucet', venue: 'KDIR 2022', cited: 5 },
  { year: 2022, type: 'conf', theme: 'applied', title: 'Utilizing Keywords Evolution in Context for Emerging Trend Detection in Scientific Publications', authors: 'N. K. Nguyen, E. Boros, G. Lejeune, A. Doucet, T. Delahaut', venue: 'SoICT 2022', cited: 2 },
  { year: 2022, type: 'workshop', theme: 'historical', title: 'Knowledge-based Contexts for Historical Named Entity Recognition & Linking', authors: 'E. Boros, C. E. González-Gallardo, E. Giamphy, A. Hamdi, J. G. Moreno, et al.', venue: 'CLEF 2022 (HIPE-2022)', cited: 20 },
  { year: 2022, type: 'workshop', theme: 'applied', title: 'Contextualizing Emerging Trends in Financial News Articles', authors: 'N. K. Nguyen, T. Delahaut, E. Boros, A. Doucet, G. Lejeune', venue: 'FinNLP 2022', cited: 4 },
  { year: 2022, type: 'workshop', theme: 'semantic', title: 'L3i at SemEval-2022 Task 11: Straightforward Additional Context for Multilingual Named Entity Recognition', authors: 'E. Boros, C. E. González-Gallardo, J. G. Moreno, A. Doucet', venue: 'SemEval 2022', cited: 4 },
  { year: 2022, type: 'workshop', theme: 'multimodal', title: 'EMBEDDIA at SemEval-2022 Task 8: Investigating Sentence, Image, and Knowledge Graph Representations for Multilingual News Article Similarity', authors: 'E. Zosa, E. Boros, B. Koloski, L. Pivovarova', venue: 'SemEval 2022', cited: 1 },
  { year: 2022, type: 'conf', theme: 'semantic', lang: 'fr', title: 'L’importance des entités pour la tâche de détection d’événements en tant que système de question-réponse', authors: 'E. Boros, J. G. Moreno, A. Doucet', venue: 'TALN 2022' },
  { year: 2022, type: 'conf', theme: 'applied', lang: 'fr', title: 'Fine-tuning de modèles de langues pour la veille épidémiologique multilingue avec peu de ressources', authors: 'S. Mutuvi, E. Boros, A. Doucet, A. Jatowt, G. Lejeune, M. Odeo', venue: 'TALN 2022', cited: 1 },
  // 2021
  { year: 2021, type: 'journal', home: true, theme: 'multimodal', title: 'Integrated Interdisciplinary Workflows for Research on Historical Newspapers: Perspectives from Humanities Scholars, Computer Scientists, and Librarians', authors: 'S. Oberbichler, E. Boros, A. Doucet, J. Marjanen, E. Pfanzelter, J. Rautiainen, et al.', venue: 'JASIST', cited: 126, page: 'papers/2021-integrated-interdisciplinary-workflows-for-research-on-historical-newspaper.html' },
  { year: 2021, type: 'conf', home: true, theme: 'historical', title: 'A Multilingual Dataset for Named Entity Recognition, Entity Linking and Stance Detection in Historical Newspapers', authors: 'A. Hamdi, E. Linhares Pontes, E. Boros, T. T. H. Nguyen, G. Hackl, J. G. Moreno, et al.', venue: 'SIGIR 2021', cited: 81, page: 'papers/2021-a-multilingual-dataset-for-named-entity-recognition-entity-linking-and-stan.html' },
  { year: 2021, type: 'conf', theme: 'semantic', title: 'Event Detection with Entity Markers', authors: 'E. Boros, J. G. Moreno, A. Doucet', venue: 'ECIR 2021', cited: 15, page: 'papers/2021-event-detection-with-entity-markers.html' },
  { year: 2021, type: 'conf', theme: 'applied', title: 'Token-Level Multilingual Epidemic Dataset for Event Extraction', authors: 'S. Mutuvi, E. Boros, A. Doucet, G. Lejeune, A. Jatowt, M. Odeo', venue: 'TPDL 2021', cited: 9, page: 'papers/2021-token-level-multilingual-epidemic-dataset-for-event-extraction.html' },
  { year: 2021, type: 'conf', theme: 'semantic', title: 'The Importance of Character-Level Information in an Event Detection Model', authors: 'E. Boros, R. Besançon, O. Ferret, B. Grau', venue: 'NLDB 2021', cited: 5 },
  { year: 2021, type: 'conf', theme: 'applied', title: 'Multilingual Epidemic Event Extraction', authors: 'S. Mutuvi, E. Boros, A. Doucet, G. Lejeune, A. Jatowt, M. Odeo', venue: 'ICADL 2021', cited: 4 },
  { year: 2021, type: 'workshop', theme: 'applied', title: 'Elastic Embedded Background Linking for News Articles with Keywords, Entities and Events', authors: 'L. A. Cabrera-Diego, E. Boros, A. Doucet', venue: 'TREC 2021', cited: 5 },
  { year: 2021, type: 'workshop', theme: 'applied', title: 'Transformer-based Methods with #Entities for Detecting Emergency Events on Social Media', authors: 'E. Boros, N. K. Nguyen, G. Lejeune, M. Coustaty, A. Doucet', venue: 'TREC 2021', cited: 5 },
  { year: 2021, type: 'workshop', theme: 'applied', title: 'L3i_LBPAM at the FinSim-2 Task: Learning Financial Semantic Similarities with Siamese Transformers', authors: 'N. K. Nguyen, E. Boros, G. Lejeune, A. Doucet, T. Delahaut', venue: 'FinSim-2 · WWW 2021 Companion', cited: 5 },
  { year: 2021, type: 'workshop', theme: 'multimodal', title: 'EMBEDDIA Tools, Datasets and Challenges: Resources and Hackathon Contributions', authors: 'S. Pollak, M. Robnik-Šikonja, M. Purver, M. Boggia, R. Shekhar, M. Pranjić, et al.', venue: 'EACL Hackashop 2021', cited: 13 },
  { year: 2021, type: 'preprint', theme: 'semantic', title: 'Event Detection as Question Answering with Entity Information', authors: 'E. Boros, J. G. Moreno, A. Doucet', venue: 'arXiv:2104.06969', cited: 9 },
  { year: 2021, type: 'preprint', theme: 'semantic', title: 'Transformer-based Methods for Recognizing Ultra Fine-grained Entities (RUFES)', authors: 'E. Boros, A. Doucet', venue: 'arXiv:2104.06048', cited: 3 },
  { year: 2021, type: 'conf', theme: 'semantic', lang: 'fr', title: 'Intérêt des modèles de caractères pour la détection d’événements', authors: 'E. Boros, R. Besançon, O. Ferret, B. Grau', venue: 'TALN 2021', cited: 1 },
  { year: 2021, type: 'conf', theme: 'noisy', lang: 'fr', title: 'Atténuer les erreurs de numérisation dans la reconnaissance d’entités nommées pour les documents historiques', authors: 'E. Boros, A. Hamdi, E. Linhares Pontes, L. A. Cabrera-Diego, J. G. Moreno, N. Sidere, et al.', venue: 'CORIA 2021', cited: 2 },
  { year: 2021, type: 'conf', theme: 'applied', lang: 'fr', title: 'Étude comparative de méthodes de classification multilingue appliquées à l’épidémiologie', authors: 'S. Mutuvi, E. Boros, A. Doucet, G. Lejeune, A. Jatowt, M. Odeo', venue: 'CORIA 2021' },
  // 2020
  { year: 2020, type: 'conf', home: true, theme: 'noisy', title: 'Alleviating Digitization Errors in Named Entity Recognition for Historical Documents', authors: 'E. Boros, A. Hamdi, E. Linhares Pontes, L. A. Cabrera-Diego, J. G. Moreno, N. Sidere, et al.', venue: 'CoNLL 2020', cited: 91, page: 'papers/2020-alleviating-digitization-errors-in-named-entity-recognition-for-historical.html' },
  { year: 2020, type: 'conf', theme: 'applied', title: 'Multilingual Epidemiological Text Classification: A Comparative Study', authors: 'S. Mutuvi, E. Boros, A. Doucet, A. Jatowt, G. Lejeune, M. Odeo', venue: 'COLING 2020', cited: 46, page: 'papers/2020-multilingual-epidemiological-text-classification-a-comparative-study.html' },
  { year: 2020, type: 'conf', theme: 'noisy', title: 'A Comparison of Sequential and Combined Approaches for Named Entity Recognition in a Corpus of Handwritten Medieval Charters', authors: 'E. Boros, V. Romero, M. Maarand, K. Zenklová, J. Křečková, E. Vidal, et al.', venue: 'ICFHR 2020', cited: 39, page: 'papers/2020-a-comparison-of-sequential-and-combined-approaches-for-named-entity-recogni.html' },
  { year: 2020, type: 'conf', theme: 'historical', title: 'Entity Linking for Historical Documents: Challenges and Solutions', authors: 'E. Linhares Pontes, L. A. Cabrera-Diego, J. G. Moreno, E. Boros, A. Hamdi, et al.', venue: 'ICADL 2020', cited: 28 },
  { year: 2020, type: 'workshop', theme: 'historical', title: 'Robust Named Entity Recognition and Linking on Historical Multilingual Documents', authors: 'E. Boros, E. Linhares Pontes, L. A. Cabrera-Diego, A. Hamdi, J. G. Moreno, et al.', venue: 'CLEF 2020 (HIPE-2020)', cited: 71 },
  { year: 2020, type: 'workshop', theme: 'noisy', title: 'Impact Analysis of Document Digitization on Event Extraction', authors: 'N. K. Nguyen, E. Boros, G. Lejeune, A. Doucet', venue: 'NL4AI 2020', cited: 17 },
  { year: 2020, type: 'workshop', theme: 'applied', title: 'TLR at the NTCIR-15 FinNum-2 Task: Improving Text Classifiers for Numeral Attachment in Financial Social Data', authors: 'J. G. Moreno, E. Boros, A. Doucet', venue: 'NTCIR-15', cited: 12 },
  // 2019
  { year: 2019, type: 'conf', theme: 'multimodal', title: 'Automatic Page Classification in a Large Collection of Manuscripts Based on the International Image Interoperability Framework', authors: 'E. Boros, A. Toumi, E. Rouchet, B. Abadie, D. Stutzmann, C. Kermorvant', venue: 'ICDAR 2019', cited: 10, page: 'papers/2019-automatic-page-classification-in-a-large-collection-of-manuscripts-based-on.html' },
  { year: 2019, type: 'conf', theme: 'applied', title: 'Knowledge-based Techniques for Document Fraud Detection: A Comprehensive Study', authors: 'B. M. Tornés, E. Boros, A. Doucet, P. Gomez-Krämer, J. M. Ogier, V. P. d’Andecy', venue: 'CICLing 2019', cited: 8 },
  // 2018 and earlier
  { year: 2018, type: 'thesis', theme: 'semantic', title: 'Neural Methods for Event Extraction', authors: 'E. Boros', venue: 'PhD thesis, Université Paris-Saclay', cited: 20, url: 'https://theses.hal.science/tel-01943841' },
  { year: 2017, type: 'workshop', theme: 'semantic', title: 'CEA LIST Participation to the TAC 2017 Event Nugget Track', authors: 'D. Kodelja, R. Besançon, O. Ferret, H. Le Borgne, E. Boros', venue: 'TAC 2017', cited: 8 },
  { year: 2014, type: 'conf', theme: 'semantic', title: 'Event Role Extraction using Domain-Relevant Word Representations', authors: 'E. Boros, R. Besançon, O. Ferret, B. Grau', venue: 'EMNLP 2014', cited: 17, page: 'papers/2014-event-role-extraction-using-domain-relevant-word-representations.html' },
  { year: 2014, type: 'conf', theme: 'semantic', lang: 'fr', title: 'Étiquetage en rôles événementiels fondé sur l’utilisation d’un modèle neuronal', authors: 'E. Boros, R. Besançon, O. Ferret, B. Grau', venue: 'TALN 2014', cited: 4 },
  { year: 2012, type: 'conf', theme: 'multimodal', title: 'Towards an Accurate Topological Localization using a Bag-of-SIFT-Visual-Words Model', authors: 'E. Boros', venue: 'IEEE ICCP 2012', cited: 2 },
  { year: 2012, type: 'conf', theme: 'semantic', title: 'SUP: A Service Oriented Framework for Semantic User Profile Extraction and Representation', authors: 'E. Boros, A. L. Gînscă, S. C. Buraga, L. Alboaie', venue: 'IEEE ICCP 2012' },
  { year: 2012, type: 'workshop', theme: 'multimodal', title: 'Targeting a Practical Approach for Robot Vision with Ensembles of Visual Features', authors: 'E. Boros', venue: 'ICCSW 2012', page: 'papers/2012-targeting-a-practical-approach-for-robot-vision-with-ensembles-of-visual-fe.html' },
  { year: 2012, type: 'workshop', theme: 'semantic', title: 'Enhancing a Question Answering System with Textual Entailment for Machine Reading Evaluation', authors: 'A. Iftene, A. L. Gînscă, M. A. Moruz, D. Trandabăț, M. Husarciuc, E. Boros', venue: 'CLEF 2012', cited: 6 },
  { year: 2012, type: 'workshop', theme: 'multimodal', title: 'UAIC Participation at Robot Vision@2012: An Updated Vision', authors: 'E. Boros', venue: 'ImageCLEF 2012', cited: 4 },
  { year: 2012, type: 'preprint', theme: 'multimodal', title: 'Towards an Accurate and Effective Robot Vision (The Problem of Topological Localization for Mobile Robots)', authors: 'E. Boros', venue: 'arXiv:2509.04948' },
  { year: 2011, type: 'workshop', theme: 'applied', title: 'Sentimatrix – Multilingual Sentiment Analysis Service', authors: 'A. L. Gînscă, E. Boros, A. Iftene, D. Trandabăț, M. Toader, M. Corîci, C. A. Perez, et al.', venue: 'WASSA 2011', cited: 37 },
  { year: 2011, type: 'workshop', theme: 'semantic', title: 'Adapting Statistical Language Identification Methods for Short Queries', authors: 'A. L. Gînscă, E. Boros, A. Iftene', venue: '2011', cited: 2 },
  { year: 2011, type: 'workshop', theme: 'multimodal', title: 'UAIC’s Participation at Wikipedia Retrieval @ ImageCLEF 2011', authors: 'E. Boros, A. L. Gînscă, A. Iftene', venue: 'ImageCLEF 2011', cited: 1 },
  { year: 2009, type: 'workshop', theme: 'multimodal', title: 'Using SIFT Method for Global Topological Localization for Indoor Environments', authors: 'E. Boros, G. Roşca, A. Iftene', venue: 'CLEF 2009', cited: 10 },
  { year: 2009, type: 'workshop', theme: 'multimodal', title: 'UAIC: Participation in ImageCLEF 2009 Robot Vision Task', authors: 'E. Boros, G. Roşca, A. Iftene', venue: 'CLEF 2009', cited: 7 },
];

const TYPE_LABELS = {
  conf: 'Conference', journal: 'Journal', workshop: 'Workshop & shared task', preprint: 'Preprint & data', thesis: 'Thesis',
};

// Venue rankings: CORE 2023 for conferences, SCImago quartile for journals.
// Only main-track papers; workshops, Findings and competitions are not ranked.
const RANKS = [
  [/^(ACL|EMNLP|SIGIR) /, 'CORE A*'],
  [/^(ECIR|ICDAR) /, 'CORE A'],
  [/^(COLING|CoNLL|TPDL|ICFHR) /, 'CORE B'],
  [/^(CICLing|NLDB) /, 'CORE C'],
  [/^JASIST$/, 'SJR Q1'],
  [/^International Journal on Digital Libraries/, 'SJR Q2'],
];
const rankOf = (p) => (p.type === 'conf' || p.type === 'journal') && (RANKS.find(([re]) => re.test(p.venue)) || [])[1];

// Homepage previews: the challenge, the conclusion and a small animated figure per paper.
// Figures animate each time a preview opens; delays are in seconds (--d).
const neuronBars = [12,3,1,1,0,1,0,2,0,0,0,0,2,0,1,0,2,1,1,0,0,0,2,3,3,19,0,0,1,0,1,0]
  .map((n, l) => `<span>${n ? `<i class="pv-rise${n === 19 ? ' hot' : ''}" style="--n:${n};--d:${(l * .04).toFixed(2)}"></i>` : ''}</span>`).join('');
const pvBar = (label, v, d, hot) => `<div class="pv-bar"><span>${label}</span><b><i class="pv-grow${hot ? ' hot' : ''}" style="width:${v * 100}%;--d:${d}"></i></b><em>${v.toFixed(2)}</em></div>`;
const PREVIEWS = {
  'Pluralistic Annotation': {
    challenge: 'Whether a Wikipedia edit manipulates a historical or cultural narrative often depends on context, interpretation and who is judging it. It is not a straightforward classification task.',
    result: 'Three experts labelled 400 edits on Ukraine and Armenia, and more than one-third prompted disagreement. Discussion often reached decisions majority voting could not, and “Ambiguous” marked genuine uncertainty, not annotation failure. Disagreement is worth keeping.',
    note: 'Schematic',
    fig: `<div class="pv-stack"><p class="pv-chip no pv-in" style="--d:.1"><small>expert 1</small>Potentially manipulative</p><p class="pv-chip pv-in" style="--d:.6"><small>expert 2</small>Not problematic</p><p class="pv-chip pv-in" style="--d:1.1"><small>expert 3</small>Ambiguous</p><p class="pv-verdict pv-in" style="--d:1.9">↓ discussion, not a majority vote</p></div>`,
  },
  'Beyond Single-Negative': {
    challenge: 'Historical entity linking has to cope with OCR noise, old spellings and people missing from the knowledge base. Preference training usually shows the model only one wrong candidate per mention and discards the rest.',
    result: 'Comparing the right entity with all rejected candidates beats single-negative DPO and supervised fine-tuning in most settings, especially on NIL mentions, ambiguity, OCR noise and difficult names. Finding the candidates remains the bottleneck.',
    href: 'https://arxiv.org/abs/2609.07379', note: 'Schematic',
    fig: `<div class="pv-cands"><p class="pv-chip ok pv-in" style="--d:.1">correct entity</p><p class="pv-chip no pv-in" style="--d:.7">rejected candidate<small>single-negative stops here</small></p><p class="pv-chip no pv-in" style="--d:1.5">rejected candidate</p><p class="pv-chip no pv-in" style="--d:1.8">rejected candidate</p><p class="pv-chip no pv-in" style="--d:2.1">NIL</p></div>`,
  },
  'OCR Post-Correction in the Age': {
    challenge: 'LLMs and vision–language models have spread quickly through OCR post-correction since 2022, with very different methods, data and ways of measuring success.',
    result: 'No single approach consistently wins: results depend on language, document type, OCR quality and context. Character and word error rates capture only part of how these models behave, and many collections and languages remain poorly covered.',
    note: 'The survey’s taxonomy',
    fig: `<div class="pv-stack"><p class="pv-chip pv-in" style="--d:.1">prompted, text only</p><p class="pv-chip pv-in" style="--d:.5">instruction-tuned, fine-tuned</p><p class="pv-chip pv-in" style="--d:.9">reference-guided</p><p class="pv-chip pv-in" style="--d:1.3">multimodal, image + text</p><p class="pv-verdict pv-in" style="--d:2">no single winner</p></div>`,
  },
  'When Superpixels Fail': {
    challenge: 'LIME on document images usually relies on superpixels made for natural images, and these do not follow text regions, layout blocks or identification codes.',
    result: 'Document-aware segmentations give steadier, more faithful explanations, and they expose shortcuts through identification codes that superpixels often hide. Segmentation is part of the explanation method, not neutral preprocessing.',
    href: 'https://arxiv.org/abs/2609.07462', note: 'Agreement between repeated explanations, one invoice',
    fig: `<div class="pv-bars">${pvBar('Quickshift', .43, .1)}${pvBar('SLIC', .79, .5)}${pvBar('OCR boxes', .93, .9, true)}${pvBar('4×4 grid', .98, 1.3, true)}</div>`,
  },
  'One Model, Many Guidelines': {
    challenge: 'Historical named entity recognition breaks on OCR noise and changing spelling, and datasets may label the same span differently under different annotation guidelines.',
    result: 'A single model that reads the guidelines takes the best score in 6 of 7 dataset–language settings, averaging 69.9 F1, without language-specific fine-tuning. It also holds up better as entities get more damaged.',
    note: 'Example from the ICDAR poster',
    fig: `<div class="pv-guide"><p class="pv-card pv-in" style="--d:.1"><small>guideline</small>ORG: named institutions</p><p class="pv-arrow pv-in" style="--d:.8">↓</p><p class="pv-card pv-in" style="--d:1.1">la <mark class="pv-mark" style="--d:1.9">Société suisse du Grutli <em>ORG</em></mark> … à <mark class="pv-mark" style="--d:2.4">Berne <em>LOC</em></mark></p></div>`,
  },
  'A Dataset of Cultural Heritage': {
    challenge: 'On English Wikipedia, articles about Ukrainian heritage are contested revision by revision. No single edit needs to be false for the picture to shift.',
    result: 'A dataset of 40 articles with their complete histories: 69,908 revisions by 19,769 editors, labelled by a language model and checked by experts. About one revision in five reshaped who is seen to have made, inherited or lost a heritage.',
    note: 'About 1 revision in 5',
    fig: `<div class="pv-dots">${Array.from({ length: 40 }, (_, i) => `<i class="pv-pop${[3, 9, 12, 18, 21, 27, 30, 36].includes(i) ? ' hot' : ''}" style="--d:${(i * .05).toFixed(2)}"></i>`).join('')}</div>`,
  },
  'Apertus': {
    challenge: 'Today’s open models have two systemic shortcomings: data compliance and multilingual representation.',
    result: 'Fully open models trained only on openly available data, across more than 1,800 languages. They approach the state of the art among fully open models on multilingual benchmarks, and data scripts, checkpoints and training code are all released.',
    href: 'https://arxiv.org/abs/2509.14233', note: 'From the paper',
    fig: `<div class="pv-stats"><p class="pv-in" style="--d:.1"><b>15T</b><span>tokens</span></p><p class="pv-in" style="--d:.5"><b>1,800+</b><span>languages</span></p><div class="pv-in" style="--d:.9"><b class="pv-meter"><i class="pv-grow" style="width:40%;--d:1.1"></i></b><span>about 40% of pretraining data not in English</span></div></div>`,
  },
  'Post-Correction of Historical': {
    challenge: 'Text from library and archive collections remains largely erroneous and noisy. Can large language models correct it, across languages, periods and document types?',
    result: 'Across fourteen models, LLMs were anything but efficient at this task. Besides fixing errors, they changed the rendering of the text, paraphrased and even translated it.',
    note: 'Schematic',
    fig: `<div class="pv-stack pv-outcomes"><p class="pv-chip pv-in" style="--d:.1">Alors, <b>ie</b> vous <b>emmene</b> lundi</p><p class="pv-chip ok pv-in" style="--d:.9"><small>fixed</small>Alors, je vous emmène lundi</p><p class="pv-chip no pv-in" style="--d:1.6"><small>paraphrased</small>Donc, je vous conduis lundi</p><p class="pv-chip no pv-in" style="--d:2.3"><small>translated</small>So, I’ll take you on Monday</p></div>`,
  },
  'Investigating OCR-Sensitive': {
    challenge: 'OCR noise is usually cleaned before modelling. But where does the damage appear inside the model itself?',
    result: 'OCR noise leaves measurable traces inside Llama 2 and Mistral: selected neurons consistently react to it. Neutralising them can improve entity recognition, with the strongest gains in specific middle and late layers.',
    note: 'OCR-sensitive neurons per layer, Llama 2 (approximate)',
    fig: `<div class="pv-neurons">${neuronBars}</div>`,
  },
  'Yes but.. Can ChatGPT': {
    challenge: 'Can ChatGPT find named entities in primary sources such as historical newspapers and classical commentaries, zero-shot, compared with state-of-the-art systems?',
    result: 'Yes, but: it shows several shortcomings, from inconsistent annotation guidelines and complex entities to code-switching and how specific the prompt is. Archives missing from the public internet also hurt its performance.',
    note: 'The shortcomings found',
    fig: `<div class="pv-stack"><p class="pv-verdict big pv-in" style="--d:.1">Yes but..</p><p class="pv-chip no pv-in" style="--d:.8">guideline consistency</p><p class="pv-chip no pv-in" style="--d:1.2">entity complexity</p><p class="pv-chip no pv-in" style="--d:1.6">code-switching</p><p class="pv-chip no pv-in" style="--d:2">prompt specificity</p></div>`,
  },
  'Assessing the Impact of OCR Noise': {
    challenge: 'Poor scans and weak OCR can hinder event detection, yet earlier studies depended on transcriptions validated by hand, which takes a lot of work.',
    result: 'We injected four common kinds of synthetic noise into clean annotated text, in several languages. Dataset imbalance, annotation style and language characteristics turned out to be the most important factors.',
    note: 'The four noise types, simulated',
    fig: `<div class="pv-noise"><p class="pv-in" style="--d:.1"><span>character degradation</span><b>e<i>p</i>id<i>e</i>m<i>i</i>c</b></p><p class="pv-in" style="--d:.7"><span>bleed-through</span><b class="n-bleed" data-t="epidemic">epidemic</b></p><p class="pv-in" style="--d:1.3"><span>blur</span><b class="n-blur">epidemic</b></p><p class="pv-in" style="--d:1.9"><span>phantom characters</span><b class="n-phantom">epidemic</b></p></div>`,
  },
  'Integrated Interdisciplinary': {
    challenge: 'Humanities scholars, computer scientists and librarians all work on digitised newspapers, each with their own workflows and traditions. Using these sources fully takes integrated approaches.',
    result: 'A schematic synthesis of how the disciplines work, where they differ and where they meet, and a proposed integrated digital hermeneutics workflow for research on digital cultural heritage.',
    note: 'Schematic',
    fig: `<svg class="pv-venn" viewBox="0 0 240 150" role="img" aria-label="Three overlapping circles for humanities, computer science and libraries"><circle class="pv-draw" pathLength="1" cx="92" cy="58" r="44" style="--d:.1"/><circle class="pv-draw" pathLength="1" cx="148" cy="58" r="44" style="--d:.6"/><circle class="pv-draw" pathLength="1" cx="120" cy="100" r="44" style="--d:1.1"/><circle class="pv-core pv-pop" cx="120" cy="72" r="9" style="--d:2"/><text class="pv-in" x="79" y="40" style="--d:.5" text-anchor="middle">humanities</text><text class="pv-in" x="161" y="40" style="--d:1" text-anchor="middle">computing</text><text class="pv-in" x="120" y="126" style="--d:1.5" text-anchor="middle">libraries</text></svg>`,
  },
  'A Multilingual Dataset': {
    challenge: 'Annotated historical resources are scarce, so information extraction performs worse on old texts than on contemporary ones.',
    result: 'The NewsEye dataset: historical newspapers from 1850 to 1950, annotated for named entities and linked to Wikidata where possible, with the author’s stance towards each entity.',
    note: 'What the dataset covers',
    fig: `<div class="pv-cover"><p class="pv-range"><span>1850</span><b><i class="pv-grow" style="width:100%;--d:.1"></i></b><span>1950</span></p><p class="pv-row"><span class="pv-chip pv-in" style="--d:1">French</span><span class="pv-chip pv-in" style="--d:1.2">German</span><span class="pv-chip pv-in" style="--d:1.4">Finnish</span><span class="pv-chip pv-in" style="--d:1.6">Swedish</span></p><p class="pv-row pv-tasks"><span class="pv-in" style="--d:2">entities</span><span class="pv-in" style="--d:2.3">→ links</span><span class="pv-in" style="--d:2.6">→ stance</span></p></div>`,
  },
  'Alleviating Digitization Errors': {
    challenge: 'Can entity recognition survive damaged OCR in historical newspapers, with no language-specific features and no separate correction step?',
    result: 'Stacking one or two Transformer blocks on top of BERT improves recognition on French and German newspapers, without hurting a modern benchmark. The model gets sturdier while the source text stays as it is.',
    note: 'The architecture',
    fig: `<div class="pv-stack pv-layers"><p class="pv-chip pv-in" style="--d:1.8">CRF</p><p class="pv-chip hot pv-in" style="--d:1.2">+ Transformer block</p><p class="pv-chip hot pv-in" style="--d:.7">+ Transformer block</p><p class="pv-chip pv-in" style="--d:.1">BERT</p></div>`,
  },
};
const previewOf = (p) => Object.entries(PREVIEWS).find(([k]) => p.title.startsWith(k))?.[1];

(function renderPublications() {
  const escape = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Homepage: newest papers plus the ones marked home: true, newest first
  const homeList = document.getElementById('homePubs');
  if (homeList) {
    const picks = PUBLICATIONS.filter((p, i) => i < 4 || p.home);
    homeList.innerHTML = picks.map((p) => {
      const pv = previewOf(p);
      const href = p.page || (pv && pv.href) || 'publications.html';
      const external = href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      return `<li class="reveal"><details name="home-pub"><summary>
      <span class="pub-year">${p.year}</span>
      <span class="pub-title"><i class="pub-dot" style="--c:var(--t-${p.theme})"></i>${escape(p.title)}</span>
      <span class="pub-venue">${escape(p.short || p.venue.replace(/,? (19|20)\d{2}$/, ''))}</span>
      <span class="pub-toggle" aria-hidden="true"></span></summary>
      <div class="pub-preview">
        <figure class="pv-fig">${pv ? pv.fig : ''}<figcaption>${pv ? pv.note : ''}</figcaption></figure>
        <div class="pv-text"><h4>Challenge</h4><p>${pv ? pv.challenge : ''}</p><h4>Conclusion</h4><p>${pv ? pv.result : ''}</p>
        <a class="pv-more" href="${href}"${external}>More on this paper →</a></div>
      </div></details></li>`;
    }).join('');
  }

  // Themes over time: papers per theme per year, as smooth lines
  const waves = document.getElementById('themeWaves');
  if (waves) {
    const themes = ['noisy', 'semantic', 'historical', 'cultural', 'multimodal', 'applied'];
    const names = { noisy: 'Noisy documents', semantic: 'Semantic extraction', historical: 'Historical AI', cultural: 'Cultural heritage', multimodal: 'Multimodality', applied: 'Applied document intelligence' };
    const first = Math.min(...PUBLICATIONS.map((p) => p.year));
    const last = Math.max(...PUBLICATIONS.map((p) => p.year));
    const W = 980, H = 320, left = 44, right = 20, top = 20, bottom = 40;
    const x = (y) => left + ((y - first) / (last - first)) * (W - left - right);
    const series = themes.map((t) => {
      const pts = [];
      for (let y = first; y <= last; y++) pts.push([y, PUBLICATIONS.filter((p) => p.year === y && p.theme === t).length]);
      return { t, pts };
    });
    const max = Math.max(...series.flatMap((s) => s.pts.map((p) => p[1])));
    const yv = (v) => H - bottom - (v / max) * (H - top - bottom);
    // Catmull-Rom to cubic Bezier, clamped so curves never dip below zero
    const path = (pts) => pts.map(([a, b], i) => {
      const X = x(a), Y = yv(b);
      if (i === 0) return `M ${X} ${Y}`;
      const [p0, p1, p2, p3] = [pts[i - 2] || pts[i - 1], pts[i - 1], pts[i], pts[i + 1] || pts[i]];
      const c1x = x(p1[0]) + (x(p2[0]) - x(p0[0])) / 6, c1y = Math.min(yv(p1[1]) + (yv(p2[1]) - yv(p0[1])) / 6, yv(0));
      const c2x = x(p2[0]) - (x(p3[0]) - x(p1[0])) / 6, c2y = Math.min(yv(p2[1]) - (yv(p3[1]) - yv(p1[1])) / 6, yv(0));
      return `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${X} ${Y}`;
    }).join(' ');
    let grid = '';
    for (let v = 0; v <= max; v += max > 6 ? 2 : 1) grid += `<line class="plot-grid-horizontal" x1="${left}" x2="${W - right}" y1="${yv(v)}" y2="${yv(v)}"/><text class="plot-year" x="${left - 10}" y="${yv(v) + 4}" text-anchor="end">${v}</text>`;
    for (let y = first; y <= last; y++) {
      if (y % 2) continue;
      grid += `<text class="plot-year" x="${x(y)}" y="${H - 12}" text-anchor="middle">${y}</text>`;
    }
    const lines = series.map((s) => `<path class="subject-line subject-line-${s.t}" d="${path(s.pts)}"><title>${names[s.t]}: ${s.pts.reduce((n, p) => n + p[1], 0)} papers</title></path>`).join('');
    waves.innerHTML = `<svg class="subject-line-plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Publications per research theme per year, ${first}–${last}">${grid}${lines}</svg>`;
  }

  const list = document.getElementById('pubList');
  const chart = document.getElementById('pubChart');
  const filters = document.getElementById('pubFilters');
  const search = document.getElementById('pubSearch');
  const count = document.getElementById('pubCount');
  document.querySelectorAll('[data-pub-ranked]').forEach((el) => { el.textContent = PUBLICATIONS.filter(rankOf).length; });
  document.querySelectorAll('[data-pub-total]').forEach((el) => { el.textContent = PUBLICATIONS.length; });
  if (!list) return;
  const boldMe = (authors) => escape(authors).replace(/E\. Boros/g, '<strong>E. Boros</strong>');

  // Year groups
  const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
  list.innerHTML = years.map((year) => {
    const items = PUBLICATIONS.filter((p) => p.year === year).map((p) => {
      const link = p.page || p.url;
      const title = link ? `<a href="${link}"${p.url ? ' target="_blank" rel="noopener"' : ''}>${escape(p.title)}</a>` : escape(p.title);
      const tags = [`<span class="pub-type pub-type-${p.type}">${TYPE_LABELS[p.type]}</span>`];
      const rank = rankOf(p);
      if (rank) tags.push(`<span class="pub-type pub-rank" data-rank="${rank.split(' ')[1]}" title="${rank.startsWith('CORE') ? 'CORE 2023 conference rank' : 'SCImago journal quartile'}">${rank}</span>`);
      if (p.lang === 'fr') tags.push('<span class="pub-type">FR</span>');
      if (p.page) tags.push('<span class="pub-type pub-has-notes">notes + figures</span>');
      return `<li class="pub-item" data-type="${p.type}" data-ranked="${rank ? 'yes' : 'no'}" data-lang="${p.lang || 'en'}" data-text="${escape((p.title + ' ' + p.authors + ' ' + p.venue).toLowerCase())}">
        <div class="pub-main"><h3>${title}</h3><p class="pub-authors">${boldMe(p.authors)}</p>
        <p class="pub-meta"><span class="pub-venue-name">${escape(p.venue)}</span>${tags.join('')}</p></div>
        <span class="pub-cites">${p.cited ? p.cited + '<small>cited</small>' : ''}</span></li>`;
    }).join('');
    return `<section class="pub-year-group" data-year="${year}"><h2>${year}</h2><ol>${items}</ol></section>`;
  }).join('');

  // Papers-per-year chart, stacked by type
  if (chart) {
    const first = 2009, last = Math.max(...years);
    const span = [];
    for (let y = first; y <= last; y++) span.push(y);
    const order = ['conf', 'journal', 'workshop', 'preprint', 'thesis'];
    const max = Math.max(...span.map((y) => PUBLICATIONS.filter((p) => p.year === y).length));
    const W = 900, H = 240, pad = 28, bw = (W - pad * 2) / span.length;
    const unit = (H - 50) / max;
    let bars = '';
    span.forEach((y, i) => {
      let yy = H - 26;
      order.forEach((t) => {
        const n = PUBLICATIONS.filter((p) => p.year === y && p.type === t).length;
        if (!n) return;
        const h = n * unit;
        yy -= h;
        bars += `<rect class="bar bar-${t}" x="${pad + i * bw + bw * 0.18}" y="${yy}" width="${bw * 0.64}" height="${h - 1.5}" rx="2" style="--i:${i}"><title>${y}: ${n} × ${TYPE_LABELS[t]}</title></rect>`;
      });
      const total = PUBLICATIONS.filter((p) => p.year === y).length;
      if (total) bars += `<text class="bar-total" x="${pad + i * bw + bw / 2}" y="${yy - 6}" text-anchor="middle" style="--i:${i}">${total}</text>`;
      if (y % 2 === 0 || y === last) bars += `<text class="bar-year" x="${pad + i * bw + bw / 2}" y="${H - 8}" text-anchor="middle">${y}</text>`;
    });
    chart.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Publications per year, stacked by type"><line class="bar-axis" x1="${pad}" x2="${W - pad}" y1="${H - 26}" y2="${H - 26}"/>${bars}</svg>`;
  }

  // Filters + search
  let active = 'all';
  function apply() {
    const q = (search?.value || '').trim().toLowerCase();
    let shown = 0;
    list.querySelectorAll('.pub-item').forEach((li) => {
      const typeOk = active === 'all' || (active === 'fr' ? li.dataset.lang === 'fr' : active === 'ranked' ? li.dataset.ranked === 'yes' : li.dataset.type === active);
      const textOk = !q || li.dataset.text.includes(q);
      li.hidden = !(typeOk && textOk);
      if (!li.hidden) shown++;
    });
    list.querySelectorAll('.pub-year-group').forEach((g) => { g.hidden = !g.querySelector('.pub-item:not([hidden])'); });
    if (count) count.textContent = `${shown} of ${PUBLICATIONS.length}`;
  }
  filters?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    active = btn.dataset.filter;
    filters.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b === btn));
    apply();
  });
  search?.addEventListener('input', apply);
  apply();
})();
