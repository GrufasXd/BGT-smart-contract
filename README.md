# BGT-smart-contract

# Verslo modelis

Šios išmaniosios sutarties verslo modelį pasirinkau iš šio puslapio - https://medium.com/coinmonks/build-a-smart-contract-to-sell-goods-6cf73609d25 
Šiame verslo modelyje dalyvauja tokios šalys: pirkėjas , pardavėjas , kurjeris , o pati išmanioji sutartis užtikrina "saugų" prekių pardavimą/pirkimą ir pristatymą.
Išmaniąją sutartį kūriau Remix IDE platformos pagalba, ją testavau lokaliame Ethereum tinkle Ganache ir testiniame lokaliame Ethereum tinkle Sepolia.

# Testavimas lokaliame Ganache tinkle

Čia matote kontrakto kūrimo nuotrauką iš Ganache tinklo:

<img width="850" alt="contract creation ganache" src="https://github.com/user-attachments/assets/e761b20c-fe0a-4913-9aab-3873cba52f90" />

Čia matote kontrakto kvietimo (arba patvirtinimo) nuotrauką iš Ganache tinklo:

<img width="852" alt="contract call ganache" src="https://github.com/user-attachments/assets/27e841b6-efb3-413c-a36f-ec043be35851" />

Čia matote paskyrų sąrašą po įvykdyto kontrakto Ganache tinkle:

<img width="851" alt="accountu irodymai ganache" src="https://github.com/user-attachments/assets/9539df67-32e1-4a8e-961f-11f9fa6c9a47" />

# Testavimas Sepolia testiniame tinkle

Čia matote jau įvykdytą kontraktą per Sepolia tinklą Etherscan puslapyje:

<img width="922" alt="testinis tinklas" src="https://github.com/user-attachments/assets/152fab08-ca09-4dc9-bd8f-c027a37b4f4c" />

# Kaip naudotis išmaniosios sutarties puslapiu

1. Atsisiųskite iš naujausio releaso esantį .rar failą.
2. Extractinkite visus failus i naują aplankalą kompiuteryje.
3. Atsidarykite komandinę eilutę.
4. Jame parašykite cd "Vieta kurioje yra failai ir aplankalas", pavyzdžiui cd C:\Users\YourUser\OneDrive\Desktop\New folder\BGT-smart-contract-0.1\kontraktas ir spauskite Enter klavišą.
5. Tada, komandinėje eilutėje įveskite šią komandą - "python -m http.server" ir spauskite Enter klavišą.
6. Įeikite į norimą naršyklę ir paieškoje suveskite šį URL: http://localhost:8000 ir spauskite Enter klavišą.
7. Norint ištestuoti sutarties veikimą turite turėti bent 3 Metamask paskyras su jomis esančiomis Sepolia Eth monetomis.
8. Spauskite mygtuką "Connect wallet" ir prisijunkite prie Metamask piniginės.
9. Suvedę pirmus 4 reikiamus laukus spauskite mygtuką "Deploy contract".
10. Pakeiskite savo Metamask paskyrą į "Courier" adreso paskyrą ir spauskite mygtuką "Confirm Delivery".
11. Norint pamatyti savo sudarytą kontraktą nueikite į šį puslapį - https://sepolia.etherscan.io ir paspaudę "Blockchain" ir "Transactions" paieškos lauke įveskite sutarties numerį.
