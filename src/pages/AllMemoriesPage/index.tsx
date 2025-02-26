export const AllMemoriesPage = () => {
    const headers = [
      {
        id: "head1",
        name: "Header1",
        description: "This is the header number 1",
      },
      {
        id: "head2",
        name: "Header2",
        description: "This is the header number 2",
      },
      {
        id: "head3",
        name: "Header3",
        description: "This is the header number 3",
      },
      {
        id: "head4",
        name: "Header4",
        description: "This is the header number 4",
      },
      {
        id: "head5",
        name: "Header5",
        description: "This is the header number 5",
      },
    ];
    return (
      <div className="1">
        {headers.map((header) => {
          return (
            <div key={header.id} className="2">
              <h2>{header.name}</h2>
              <p>{header.description}</p>
            </div>
          );
        })}
      </div>
    );
  };