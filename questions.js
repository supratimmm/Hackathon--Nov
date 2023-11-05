// questions.js
const questions = [
  {
    question: "Which of the following would you NOT want to put on a DMZ?",
    options: [
      "Web server",
      "Mail server",
      "File server",
      "Database server containing PII",
    ],
    answer: "Database server containing PII",
    info: "Sensitive data, such as Personally Identifiable Information (PII), should not be placed on a DMZ (Demilitarized Zone) to minimize the risk of unauthorized access and data breaches.",
  },
  {
    question:
      "Which of the following is an advantage of using a client/server network over using a peer-to-peer (P2P) network?",
    options: [
      "Client/server networks are less expensive to set up.",
      "Client/server networks provide a more decentralized approach to resource sharing.",
      "A client/server network allows for simpler file sharing.",
      "A client/server network allows resources to be managed centrally",
    ],
    answer: "A client/server network allows resources to be managed centrally",
    info: "One of the advantages of using a client/server network over a peer-to-peer (P2P) network is that a client/server network allows resources to be managed centrally, providing better control and security.",
  },
  {
    question: "Linux command used to remove files or directories.",
    options: ["delete", "remove", "erase", "rm"],
    answer: "rm",
    info: "The 'rm' command in Linux is used to remove files or directories.",
  },
  {
    question:
      "What is added to information before it is hashed to help prevent rainbow table attacks?",
    options: ["salt", "pepper", "spice", "sugar"],
    answer: "salt",
    info: "A 'salt' is added to information before it is hashed to help prevent rainbow table attacks, making each hashed password unique.",
  },
  {
    question: "Which of the following is not a hashing algorithm?",
    options: ["MD5", "SHA-256", "CashHash", "SHA-1"],
    answer: "CashHash",
    info: "'CashHash' is not a recognized hashing algorithm, unlike MD5, SHA-256, and SHA-1, which are commonly used.",
  },
  {
    question: "What command adds a group in Linux?",
    options: ["groupcreate", "addgroup", "creategroup", "groupadd"],
    answer: "groupadd",
    info: "The 'groupadd' command is used to add a group in Linux.",
  },
  {
    question: "What command is used to print or set the system time or date?",
    options: ["time", "systemtime", "date", "datetime"],
    answer: "date",
    info: "The 'date' command in Linux is used to print or set the system time and date.",
  },
  {
    question: "What command removes a user from the system in Linux?",
    options: ["userdelete", "removeuser", "deleteuser", "userdel"],
    answer: "userdel",
    info: "The 'userdel' command in Linux is used to remove a user from the system.",
  },
  {
    question: "This Linux command is used to create directories.",
    options: ["createfolder", "newdir", "makedirectory", "mkdir"],
    answer: "mkdir",
    info: "The 'mkdir' command is used to create directories in Linux.",
  },
  {
    question: "Port 7",
    options: ["ftp", "http", "telnet", "echo"],
    answer: "echo",
    info: "Port 7 is typically associated with the 'echo' service.",
  },
  {
    question: "Kerberos",
    options: ["Port 53", "Port 80", "Port 88", "Port 443"],
    answer: "Port 88",
    info: "Kerberos is commonly associated with port 88.",
  },
  {
    question: "DHCP uses the following steps?",
    options: [
      "LEASE,INIT,DISCOVER,RELEASE",
      "OFFER,REQUEST,ACK",
      "DISCOVER,OFFER,REQUEST,ACK",
      "START,CONNECT,TERMINATE,END",
    ],
    answer: "DISCOVER,OFFER,REQUEST,ACK",
    info: "DHCP (Dynamic Host Configuration Protocol) typically uses the steps: DISCOVER, OFFER, REQUEST, ACK.",
  },
  {
    question: "Doom uses port:",
    options: ["666", "667", "665", "668"],
    answer: "666",
    info: "Doom commonly uses port 666.",
  },
  {
    question:
      "View contents of file, concatenate files and redirect output in terminal or files?",
    options: ["cat", "dog", "grep", "sed"],
    answer: "cat",
    info: "The 'cat' command in Linux is used to view the contents of files, concatenate files, and redirect output to the terminal or files.",
  },
  {
    question: "Sets a specific action to occur at a later date?",
    options: ["Crontab", "At", "Timeit", "Later"],
    answer: "Crontab",
    info: "The 'crontab' command in Linux is used to set specific actions to occur at a later date through the cron service.",
  },
  {
    question: "Hashing is a ______ function.",
    options: ["1-way", "2-way", "3-way", "4-way"],
    answer: "1-way",
    info: "Hashing is a one-way function, meaning it cannot be easily reversed to retrieve the original data.",
  },
  {
    question: "The Linux ______ command displays a manual page for a command.",
    options: ["info", "manual", "help", "man"],
    answer: "man",
    info: "The 'man' command in Linux is used to display a manual page for a specified command.",
  },
  {
    question:
      "Encryption and decryption occur at the __________ layer of the OSI model.",
    options: ["Network", "Data Link", "Physical", "Presentation"],
    answer: "Presentation",
    info: "Encryption and decryption typically occur at the Presentation layer of the OSI model.",
  },
  {
    question:
      "The two sublayers of the Data Link layer are _______ and _______.",
    options: [
      "MAC, LLC",
      "IP, TCP",
      "Physical, Data Link",
      "Network, Transport",
    ],
    answer: "MAC, LLC",
    info: "The Data Link layer consists of two sublayers: MAC (Media Access Control) and LLC (Logical Link Control).",
  },
  {
    question: "Which of the following is not a layer of the OSI model?",
    options: ["Internet", "Transport", "Network", "Session"],
    answer: "Internet",
    info: "The OSI model includes layers such as Network, Transport, and Session, but it does not have an 'Internet' layer.",
  },
  {
    question: "The OSI Model is a working industry model.",
    options: ["True", "False"],
    answer: "False",
    info: "The statement is false. The OSI (Open Systems Interconnection) Model is a conceptual model, not an industry working model.",
  },
  {
    question: "OSI stands for ________.",
    options: [
      "Open Systems Interface",
      "Operating System Interface",
      "Open Systems Interchange",
      "Open Systems Interconnection",
    ],
    answer: "Open Systems Interconnection",
    info: "OSI stands for 'Open Systems Interconnection,' a framework for understanding and describing networking protocols and concepts.",
  },
  {
    question:
      "How would a directory with permission 461 appear as the output of 'ls -l'?",
    options: ["dr--rw---x", "dr--r-x---", "d-r--rw----", "d---rw--x-"],
    answer: "dr--rw---x",
    info: "A directory with permission 461 would appear as 'dr--rw---x' in the output of 'ls -l,' where 'd' represents a directory, 'r' is for read permission, 'w' is for write permission, and 'x' is for execute permission.",
  },
  {
    question: "Which command runs the last command again?",
    options: ["redo", "runlast", "!!", "recommand"],
    answer: "!!",
    info: "The '!!' command runs the last command again in Linux.",
  },
  {
    question: "The wildcard character * symbolizes ________.",
    options: [
      "1 or more characters",
      "0 or more characters",
      "2 or more characters",
      "3 or more characters",
    ],
    answer: "0 or more characters",
    info: "The wildcard character '*' symbolizes '0 or more characters' in Linux.",
  },
  {
    question:
      "True or False? 'Password123' is one of the most commonly used passwords",
    options: ["True", "False"],
    answer: "True",
    info: "'Password123' is indeed one of the most commonly used passwords.",
  },
  {
    question:
      "True or False? Some passwords can be cracked in less than a second",
    options: ["True", "False"],
    answer: "True",
    info: "Some passwords can be cracked in less than a second, especially if they are weak and lack complexity.",
  },
  {
    question:
      "An attempt to flood the bandwidth or resources of a targeted system so that it becomes overwhelmed with false requests and in result doesn't have time or resources to handle legitimate requests is known as:",
    options: ["DDoS Attack", "DoS Attack", "Malware Attack", "Phishing Attack"],
    answer: "DoS Attack",
    info: "A Denial of Service (DoS) attack is an attempt to flood the bandwidth or resources of a targeted system, overwhelming it with false requests and preventing it from handling legitimate requests.",
  },
  {
    question:
      "Which of the answers listed below refers to a means for executing reflective DOS attack?",
    options: ["Phishing", "IP Spoofing", "Man-in-the-middle"],
    answer: "IP Spoofing",
    info: "IP Spoofing is a means for executing a reflective DOS (Denial of Service) attack by manipulating the source IP address to hide the attacker's identity and make it difficult to trace the source.",
  },
  {
    question:
      "Which of the following attack types relies on amplification effect?",
    options: ["Zero-day attack", "DDoS attack", "Brute-force attack"],
    answer: "DDoS attack",
    info: "DDoS (Distributed Denial of Service) attack relies on an amplification effect where multiple compromised systems are used to flood a target system with traffic, overwhelming its resources and causing a service disruption.",
  },
  {
    question:
      "An unauthorized practice of obtaining confidential information by manipulating people into disclosing sensitive data is referred to as:",
    options: ["Phishing", "Spoofing", "Social Engineering"],
    answer: "Social Engineering",
    info: "Social Engineering is an unauthorized practice of obtaining confidential information by manipulating people into disclosing sensitive data.",
  },
  {
    question:
      "Which term best describes disgruntled employees abusing legitimate access to company's internal resources?",
    options: ["Intrusion Detection", "Data Breach", "Insider Threat"],
    answer: "Insider Threat",
    info: "Insider Threat best describes disgruntled employees abusing legitimate access to a company's internal resources.",
  },
  {
    question: "Malicious code activated by a specific event is known as:",
    options: ["Trojan Horse", "Virus", "Logic Bomb"],
    answer: "Logic Bomb",
    info: "Malicious code activated by a specific event is known as a Logic Bomb.",
  },
  {
    question:
      "An optimal Wireless Access Point (WAP) antenna placement provides a countermeasure against:",
    options: ["War Chalking", "Bluejacking", "War Driving"],
    answer: "War Driving",
    info: "An optimal Wireless Access Point (WAP) antenna placement provides a countermeasure against War Driving.",
  },
  {
    question:
      "Remapping a domain name to a rogue IP address is an example of what kind of exploit?",
    options: ["Phishing", "SQL Injection", "DNS Poisoning"],
    answer: "DNS Poisoning",
    info: "Remapping a domain name to a rogue IP address is an example of DNS Poisoning.",
  },
  {
    question:
      "Which of the answers listed below refers to a network protocol used in the most common types of spoofing attacks?",
    options: ["SMTP", "RDP", "SNMP"],
    answer: "SMTP",
    info: "SMTP (Simple Mail Transfer Protocol) is a network protocol used in the most common types of spoofing attacks.",
  },
  {
    question: "A wireless disassociation attack is a type of:",
    options: [
      "Denial of Service (DoS) attack",
      "Wireless Network Intrusion",
      "RF Jamming",
    ],
    answer: "Denial of Service (DoS) attack",
    info: "A wireless disassociation attack is a type of Denial of Service (DoS) attack.",
  },
  {
    question:
      "An attack against encrypted data that relies heavily on computing power to check all possible keys and passwords until the correct one is found is referred to as:",
    options: [
      "Brute-force attack",
      "Cryptographic Assault",
      "Password Hacking",
    ],
    answer: "Brute-force attack",
    info: "An attack against encrypted data that relies heavily on computing power to check all possible keys and passwords until the correct one is found is referred to as a Brute-force attack.",
  },
  {
    question: "Switch spoofing and double tagging are attack methods used in:",
    options: ["VLAN Hopping Attack", "MAC Address Forgery", "ARP Poisoning"],
    answer: "VLAN Hopping Attack",
    info: "Switch spoofing and double tagging are attack methods used in VLAN Hopping Attack.",
  },
  {
    question: "Which of the following is an example of active eavesdropping?",
    options: ["Zero-day attack", "Spear phishing", "MITM (Man-in-the-Middle)"],
    answer: "MITM (Man-in-the-Middle)",
    info: "MITM (Man-in-the-Middle) is an example of active eavesdropping.",
  },
  // Add as many questions as you want here...
];

let lastQuestionIndex = null;

function getRandomQuestion() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (questions.length > 1 && randomIndex === lastQuestionIndex);

  lastQuestionIndex = randomIndex;
  return questions[randomIndex];
}
