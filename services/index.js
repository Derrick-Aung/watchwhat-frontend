const fetch = require('node-fetch');

const discordConfig = {
  username: 'WAKA Bot',
  title: 'Top Voted Movie',
  description: '**Most upvoted movie on WatchWhat in the past 24 hours**',
  url: 'https://watchwhat.derrick-aung.xyz/poll',
  color: '16746624',
  author: {
    name: 'WatchWhat Robot',
    url: 'https://watchwhat.derrick-aung.xyz',
    icon_url: 'https://vgraphs.com/images/agents/phoenix-avatar.jpg',
  },
  footer: {
    text: 'Great success comes with a lot of haters',
    icon_url:
      'https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/77395529_2639238492836727_6252443506380374016_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=tugkA2wAVy4AX9UZzgY&_nc_ht=scontent.fmel12-1.fna&oh=5e8f3db1bf23977e129c9715426cd4e0&oe=5F8F4FD6',
  },
};

const getVoterString = (voters) => {
  if (voters.length === 0) return 'None';
  return voters.map(({ username }) => username).join(', ');
};

module.exports.sendDiscordWebhoook = async ({
  movieId,
  upvoters,
  downvoters,
}) => {
  const { username, title, description, color, author, footer } = discordConfig;

  const response = await fetch(
    `${process.env.TMDB_URL}movie/${movieId}?api_key=${process.env.TMDB_API}`
  );

  const {
    backdrop_path,
    overview,
    title: movie_title,
    vote_average,
  } = await response.json();

  const upvoters_string = getVoterString(upvoters);
  const downvoters_string = getVoterString(downvoters);

  await fetch(process.env.WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      embeds: [
        {
          author,
          title,
          url: `https://watchwhat.derrick-aung.xyz/movies/${movieId}/details`,
          description,
          color,
          fields: [
            {
              name: 'Movie',
              value: `${movie_title} - ${vote_average} ⭐`,
            },
            {
              name: 'Overview',
              value: overview,
            },
            {
              name: 'Upvoters',
              value: upvoters_string,
            },
            {
              name: 'Downvoters',
              value: downvoters_string,
            },
          ],
          image: {
            url: `https://image.tmdb.org/t/p/original${backdrop_path}`,
          },
          footer,
        },
      ],
    }),
  });
};
