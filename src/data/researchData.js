export const publications = [
  {
    id: "uav-avalanche",
    category: "Under Review",
    badge: "Under Publication • Springer LNCS (AITA 2026)",
    title: "Lightweight UAV Avalanche Monitoring",
    authors: "Kalyani Agarwal, et al.",
    journal: "Presented at AITA 2026, Bengaluru (7–8 Aug 2026) · Proceedings under publication in Springer LNCS",
    year: "2026",
    domain: "UAV Robotics · Computer Vision · Autonomous Systems",
    description: "Developed a lightweight UAV framework combining monocular depth estimation, optical flow, and ConvNeXtTiny with attention-based classification for four-class avalanche detection. Achieved 85.26% validation accuracy and 83.56% macro-F1, with Grad-CAM explainability and autonomous navigation validated using PX4 SITL and Gazebo.",
    tech: ["ConvNeXtTiny", "Optical Flow", "Monocular Depth", "Grad-CAM", "PX4 SITL", "Gazebo", "UAV Robotics", "PyTorch"],
    pdfLink: null,
    githubLink: "https://github.com/kalyani-n2711",
    featured: true
  },
  {
    id: "pcos-paper",
    category: "Published",
    badge: "Published Research • 2025",
    title: "Investigation of Clinical Data and Ultrasound Images for PCOS Diagnosis",
    authors: "Kalyani Agarwal (First Author), et al.",
    journal: "First Author Research Publication",
    year: "2025",
    domain: "Medical AI · Computer Vision · Healthcare",
    description: "Conducted research on Polycystic Ovary Syndrome (PCOS) diagnosis using ultrasound image processing and clinical data analysis. Applied OpenCV, image augmentation, contour detection, heatmaps, and machine learning techniques to identify PCOS patterns and improve diagnostic understanding.",
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Pandas", "Matplotlib"],
    pdfLink: "PCOS_PAPER.pdf",
    githubLink: "https://github.com/kalyani-n2711/PCOS-Ultrasound-Analysis",
    featured: true
  },
  {
    id: "cfrp-xai",
    category: "Under Review",
    badge: "Featured Research Work • IEEE DL Paper",
    title: "Explainable Multimodal Deep Learning for CFRP Strength Prediction, Structural Integrity Analysis, and Damage Segmentation",
    authors: "Kalyani Agarwal (First Author), et al.",
    journal: "IEEE Deep Learning Research Submission",
    year: "2026",
    domain: "Explainable AI · Computer Vision · Deep Learning · Materials Science",
    description: "Proposed a unified multimodal deep learning framework for Carbon Fibre Reinforced Polymer (CFRP) structural analysis. Integrates strength prediction, structural integrity classification, damage segmentation, and Compression After Impact (CAI) estimation using DNN Ensembles, Hybrid Attention U-Net, MobileNetV2, and Explainable AI (SHAP, LIME, Grad-CAM).",
    tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Explainable AI", "SHAP", "LIME", "Grad-CAM", "Attention U-Net"],
    pdfLink: "DL_IMI_06june_Ressearch_IEEE.pdf",
    githubLink: "https://github.com/kalyani-n2711",
    featured: true
  },
  {
    id: "alzheimers-svd-svm",
    category: "Under Review",
    badge: "Under Review / Research Project",
    title: "Hybrid ML Model for Alzheimer's Disease Classification Using SVD + SVM and Fourier Feature Engineering",
    authors: "Kalyani Agarwal (Co-Author & Core ML Developer), et al.",
    journal: "Medical Informatics & Healthcare AI Project",
    year: "2026",
    domain: "Healthcare AI · Machine Learning · Signal & Matrix Processing",
    description: "Developed a hybrid machine learning framework for Alzheimer's disease classification using Singular Value Decomposition (SVD) and Support Vector Machines (SVM). Enhanced with Fourier Feature Extraction, Markov Chain Upsampling, and Weighted Least Squares. Achieved 85.81% accuracy and 0.91 AUC on 2,149 patient records.",
    tech: ["Python", "Scikit-Learn", "SVM", "SVD", "Fourier Transform", "NumPy", "Pandas", "Healthcare AI"],
    pdfLink: "alzheimer-report.pdf",
    githubLink: "https://github.com/kalyani-n2711/alzheimer-s-disease_MIS-III",
    featured: true
  },
  {
    id: "autonomous-ultrasound",
    category: "Under Review",
    badge: "Medical Robotics Research Project",
    title: "Autonomous Robotic Ultrasound for Fetal Heartbeat & Abdominal Monitoring",
    authors: "Kalyani Agarwal, Research Team Member",
    journal: "Robotics & Medical AI Research",
    year: "2025 - 2026",
    domain: "Medical Robotics · Autonomous Systems · Computer Vision",
    description: "Developed an autonomous robotic ultrasound framework for fetal heartbeat monitoring using a 6-DOF robotic arm, force-aware control, trajectory planning, inverse kinematics, and ultrasound signal analysis. Reconstructs abdominal geometry from synthetic, image-based, and 3D point-cloud inputs to generate safe scanning trajectories.",
    tech: ["6-DOF Kinematics", "Robotics", "Computer Vision", "3D Point Cloud", "Force Control", "Signal Analysis"],
    pdfLink: "Autonomous_Robotic_Ultrasound_Report.pdf",
    featured: true
  }
];

export const patents = [
  {
    id: "patent-autonomous",
    title: "Autonomous Robotic Ultrasound System, Methods, and Computer Readable Media Thereof",
    status: "Patent Published",
    authority: "Indian Patent Office, 2026",
    inventors: "Kalyani Agarwal (Patent Inventor)",
    filingNo: "Application No. 20261105269A",
    year: "2026",
    domain: "Medical Robotics · Autonomous Systems · Computer Vision",
    abstract: "A novel autonomous robotic automation framework utilizing 3D point-cloud abdominal surface reconstruction, inverse kinematics trajectory generation, and real-time force-torque feedback for non-invasive, safe fetal heartbeat and cardiac ultrasound monitoring.",
    highlights: ["Application No. 20261105269A", "Indian Patent Office 2026", "6-DOF Force-Aware Control"]
  }
];
