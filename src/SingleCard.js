import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card);
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" alt="card front" src={card.src} />
                <img
                    className="back"
                    alt="card back"
                    src="/img/cover.png"
                    onClick={handleClick} />
            </div>
          </div>
    )
}