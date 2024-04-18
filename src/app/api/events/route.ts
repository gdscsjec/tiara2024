export async function GET() {
  const categoriesList = [
    {
      category: "Technical",
      events: [
        {
          name: "TechExpo1",
          description: "Showcasing latest tech innovations",
          rules: "Ru",
          prerequisites: "Prerequisite",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/codejam-thumbnail.jpg",
          startTime: "2024-05-12 10:00",
          endTime: "2024-05-12 18:00",
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Emily Brown",
              phone: "+5566778899",
            },
          ],
        },
      ],
    },
    {
      category: "Non-Technical",
      events: [
        {
          name: "TechExpo2",
          description: "Showcasing latest tech innovations",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/codejam-thumbnail.jpg",
          startTime: "2024-05-12 10:00",
          endTime: "2024-05-12 18:00",
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Emily Brown",
              phone: "+5566778899",
            },
          ],
        },
      ],
    },
    {
      category: "Cultural",
      events: [
        {
          name: "TechExpo3",
          description: "Showcasing latest tech innovations",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/codejam-thumbnail.jpg",
          startTime: "2024-05-12 10:00",
          endTime: "2024-05-12 18:00",
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Emily Brown",
              phone: "+5566778899",
            },
          ],
        },
      ],
    },
    {
      category: "Mega",
      events: [
        {
          name: "TechExpo4",
          description: "Showcasing latest tech innovations",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: "RR",
          prerequisites: "PP",
          thumbnail: "/codejam-thumbnail.jpg",
          startTime: "2024-05-12 10:00",
          endTime: "2024-05-12 18:00",
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Emily Brown",
              phone: "+5566778899",
            },
          ],
        },
      ],
    },
  ];
  

  const mappedCategories = categoriesList.map(({category,events}) => {
    return {
     category,
     events
    };
  });

  return Response.json(mappedCategories);
}
