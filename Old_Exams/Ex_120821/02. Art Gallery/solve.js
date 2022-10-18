class ArtGallery {
    constructor(creator) {
        this.creator = creator,
        this.possibleArticles = { "picture":200,"photo":50,"item":250 },
        this.listOfArticles = [],
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);

        let presented = Object.keys(this.possibleArticles).find(key => key === articleModel);
        if (!presented) {
            throw new Error(`This article model is not included in this gallery!`);
        }

        let exists = this.listOfArticles.find(el => el.articleName === articleName);
        if (!exists) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        } else {
            if (exists.articleModel === articleModel) {
                exists.quantity += quantity;
            }
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let presented = this.guests.find(guest => guest.guestName === guestName);
        if (presented) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;

        switch(personality) {
            case "Vip":
                points = 500;
                break;
            case "Middle":
                points = 250;
                break;
            default:
                points = 50;
                break;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });
        
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let exists = this.listOfArticles.find(el => el.articleName === articleName);
        if (!exists) {
            throw new Error(`This article is not found.`);
        } else {
            if (exists.articleModel !== articleModel) {
                throw new Error(`This article is not found.`);
            }
            if (exists.quantity === 0) {
                return `The ${articleName} is not available.`;
            }
        }

        let presented = this.guests.find(guest => guest.guestName === guestName);
        if (!presented) {
            throw new Error(`This guest is not invited.`);
        } else {

            // TO DO:

        }

        return `${guestName} successfully purchased the article worth ${articlePoint} points."`
    }

}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

