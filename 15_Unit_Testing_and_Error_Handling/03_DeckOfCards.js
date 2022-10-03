function printDeckOfCards(cards) {
    let result = [];

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
    
        if (validFaces.indexOf(face.toString()) === -1) {
            throw new Error(`Invalid card: ${face + suit}`);
        }
    
        if (validSuits.indexOf(suit.toString()) === -1) {
            throw new Error(`Invalid card: ${face + suit}`);
        }
    
        switch(suit) {
            case "S": suit = '\u2660';
            break;
            case 'H': suit = '\u2665';
            break;
            case 'D': suit = '\u2666';
            break;
            case 'C': suit = '\u2663';
            break;
        }
    
        return {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;
            }
        }
    }
    
    try {
        cards.forEach(card => {
            let cardSuit = card.charAt(card.length - 1);
            let cardFace = card.slice(0, card.length - 1)
            result.push(createCard(cardFace, cardSuit).toString());
        });

        console.log(result.join(' '));

    } catch (error) {
        console.log(error.message);
    }
    
  }

cards = ['AS', '10D', 'KH', '2C'];
printDeckOfCards(cards);

cards2 = ['5S', '3D', 'QD', '1C'];
printDeckOfCards(cards2);