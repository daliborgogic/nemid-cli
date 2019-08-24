# nemid-cli

> A list of already created NemID for Private (POCES) test users. Please make sure that you don’t lock the test user by typing wrong otp/password too many times. If that happen or if the key card is empty, please notify us using the Contact us](https://www.nets.eu/developer/e-ident/contactus) form.

| Name         | CPR        | Password | OTP                                                                                                            |
| :------------|:-----------|:---------|:---------------------------------------------------------------------------------------------------------------|
| Thorgrim122  | 1403532411 | asasas12 | [Thorgrim122-key-card.pdf](https://www.nets.eu/developer/e-ident/Documents/Thorgrim122%20-%20key%20card.pdf)   |
| Tienna141    | 1303103238 | asasas12 | [Tienna141-key-card.pdf](https://www.nets.eu/developer/e-ident/Documents/Tienna141%20-%20key%20card.pdf)       |
| Tiina136     | 3112743356 | asasas12 | [Tiina136-key-card.pdf](https://www.nets.eu/developer/e-ident/Documents/Tiina136%20-%20key%20card.pdf)         |
| Tordur131    | 2706023131 | asasas12 | [Tordur131-key-card.pdf](https://www.nets.eu/developer/e-ident/Documents/Tordur131%20-%20key%20card.pdf)       |
| Tinemarie258 | 1303103252 | asasas12 | [Tinemarie258-key-card.pdf](https://www.nets.eu/developer/e-ident/Documents/Tinemarie258%20-%20key%20card.pdf) |

How to generate your own test user:
- Issuance of test users must be done from [https://appletk.danid.dk/developers/](https://appletk.danid.dk/developers/) (whitelisting required):
- If you are an E-Ident customer, send your IP address and MID to Nets using the [Contact us](https://www.nets.eu/developer/e-ident/contactus) form. We will forward the request to NemID. For others, see NemID [Adgang til testsystem](https://www.nets.eu/dk-da/kundeservice/nemid-tjenesteudbyder/implementering/Pages/adgang-til-testsystem.aspx).
- No detailed guide for issuance of POCES test user exists. When creating a test user, please make sure to select a valid password (6 or more characters, and at least one character and one number).

> If you select an invalid password, any attempt to test with this user will generate a `SRV004` error.
