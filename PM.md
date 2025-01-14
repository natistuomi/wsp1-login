# PM 
*Natalie Tuomi 3 Mars 2023*

---

## Inledning
Arbetets syfte var att i grupp skapa ett grundläggande login-system som klarade av tester anpassade för uppgiften. Systemet skulle kunna logga in en användare, visa en profilsida, logga ut användaren och skapa en ny användare. Allt arbete skedde i en grupp av fem även om det alltid var någon frånvarande. Gruppen skulle bara använda en dator för att främja ett samarbete. För oss blev det att två personer skrev det mesta av koden även om resten av oss alltid var delaktiga i diskussionen. 

---

## Bakgrund
Arbetet var uppdelat i olika delar och tester. Först och främst så fick gruppen gå igenom vad uppgiften gick ut på och vad som skulle vara med. Sedan gjordes en översiktlig planering. Vilka paket behövde laddas ner? Vilka kolumner behövde vår databas ha? Hur skulle routerna hänga ihop? Grundrepot forkades, paketen laddades ner, databasen skapades och vi hade en förstasida. Vi körde test:1 för att se om vi kunde börja med routebyggandet.

Test:2 frågar efter en fungerande login-sida. Den ska ha ett formulär med fält för användarnamn och lösenord samt en knapp för att logga in. Det var här vi började genom att först skapa en login.njk i mappen views. Där skapade vi även en grundläggande formulär med elementen som efterfrågades. Genom att gör en get('/login') route så gjorde vi att det fanns en html-sida såsom testet efterfrågade. Testen bad också om att korrekta inloggningsuppgifter skulle logga in en användare medan felmedelanden skulle dyka upp ifall något var fel med insättningen. Det här fixade vi med en route post('/login') med en if-sats för ifall någon av fälten var tomma för felen. Sedan använde vi bcrypt för att hasha lösenordet och jämföra värden med databasen.

Test:3 ville ha en profil-sida för inloggningen att leda till. Sidan skulle visa användarnamnet samt ha en knapp för att logga ut. Det fanns dessutom olika responser som skulle skickas. Här fick View-mappen en ny fil med namn profile.njk där vi uppfyllde användarnamn och knapp kraven. Vi lade till två nya router. get('/profile') fick fram profilsidan. För att sidan bara skulle kunna nås när användaren var inloggad så fick vi använda sessions. För att knappen skulle fungera använde vi en post('/logout') som stängde sessionen och redirectade till en annan sida.

Test:4 bad om en register-sida med forumlärelement för användarnamn, lösenord, lösenordskonfirmation och en registrera knapp. Det här fixade vi med en register.njk i views och en get('/register) route. För att formuläret skulle kunna uppfylla sitt syfte så krävdes en post(/register) som skulle ge felmedelanden liknanden dem från login-sidan, se om användarnamnet fanns i databasen och om inte så skulle den lägga till informationen i databasen. Det blev en stor if-sats som checkade av om någon av fälten var tomma, om lösenorden matchade och ääven en sql fråga för databasen om användarnamnet redan fanns. Om allt var redo för användaren att registreras så användes bcrypt för att hasha lösenordet och sedan sparades informationen till databasen.

Vi hade sedan tillräckligt med tid över för att sätta ihop en delete knapp på profilsidan som kunde ta bort användaren från databasen. 

---

## Bra
I sin helhet så gick arbetet väldigt smidigt. Gruppens samarbete och engagemang gjorde det lätt att ta sig fram och gemensamt öva eller lära sig stegen vi använde. Arbetet med node, express, router, databasen, mysql och views gick för det mesta utan större problem. Det var arbete vi på någon nivå redan hade gjort i tidigare arbeten vilket gjorde att även om alla kanske inte alltid var hundra procent säkra på vad som skulle göras så var gruppen gemensamt på ganska trygg mark. Testerna gjorde det dessutom enklare att få en tydlig struktur på var, när och hur saker skulle göras vilket även var fördelaktigt för samarbetet eftersom det flöt på bättre än det annars hade kunnat bli. 

---

## Mindre bra
I det stora hela saknade hemska problem eller hinder under arbetets gång. Däremot finns det småsaker som skulle ha kunnat gå bättre eller smidigare. Vi hade ett väldigt bra samarbete, men det blev främst två stycken som kodade. Det här skulle kunna lösas med en klocka som avgör när datorn byter hand. Den lösningen hade haft sina egna bekymmer eftersom det skulle göra stämningen mycket mer pressad då alla skulle känna av en påhittad tidspress. Den röda tråden skulle även tappas i och med omställningen. På det sättet så skulle det kunna vara bättre att istället byta runt datorn efter varje 80 minuters pass. Genom att byta i och med rasten skulle det bli en naturliga övergång och ge två personer möjligheten att koda varje dubbelpass. Alla skulle få ungefär två pass spridda över veckorna med arbetet där de kodade. 

Annars var våra problem ofta av en mindre natur och ofta kopplade till testens formalia eller små slarvfel som hade smugit sig in i koden. Det här var irriterande, men överskådligt. Däremot fick vi något av ett farthinder vid tillfällena då vi behövde implementera bcrypt och sessions. Detta berodde på att det var nya tekniker som vi aldrig hade arbetat med tidigare. Grupparbetet gjorde det väldigt svårt att effektivt lista ut vad som behövde göras vid tillfällen då det var något helt nytt som man egentligen behövde läsa på en del om. Läsning funkar inte i grupparbeten och defintivt inte när det bara är en skärm. Detta skulle kunna förebyggas genom att gå igenom teknikerna innan gruppen faktiskt behöver använda dem eller genom att be medlemmarna läsa på om det på egen tid.

---

## Sammanfattning
Det var ett lärdomsfullt arbete som för det mesta passade i gruppformat. Vi fick fram en produkt som uppfyllde målen och som skulle kunna sättas ihop med annat under framtida arbeten. Den grafiska biten finns kvar att forma hur man nu vill göra det. Nya tekniker introducerades praktiskt samtidigt som saker vi redan hållit på med nöttes in och förstärktes. Ett lyckat arbete.