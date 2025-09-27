const Createpost = () => {
  return (
    <>
      <form className="Create-Post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title Post
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today"
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title Post
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Createpost;
