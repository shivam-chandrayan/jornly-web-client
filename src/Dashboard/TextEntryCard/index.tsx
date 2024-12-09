const TextEntryCard = () => {
  return (
    <div className="text-entry-card rounded-xl bg-white p-4">
      <div className="image-gallery grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
        <div className="col-span-2 row-span-2">
          <img className="square-image" src="./img/1.jpg" alt="" />
        </div>
        <div>
          <img className="square-image" src="./img/2.jpg" alt="" />
        </div>
        <div>
          <img className="square-image" src="./img/3.jpg" alt="" />
        </div>
        <div>
          <img className="square-image" src="./img/4.jpg" alt="" />
        </div>
        <div>
          <img className="square-image" src="./img/5.png" alt="" />
        </div>
      </div>
      <div className="text-desc mt-4">
        <h3 className="text-xl font-semibold text-text-primary">
          Most productive day of this week
        </h3>
        <p className="text-sm text-text-primary">
          Today was a remarkably good day! I set some clear goals for myself
          this morning, and I’m thrilled to say that I achieved every single one
          of them. It’s such a satisfying feeling to check off those boxes an...
        </p>
        <p className="text-sm text-text-secondary mt-8">Monday, September 19</p>
      </div>
    </div>
  );
};

export default TextEntryCard;
