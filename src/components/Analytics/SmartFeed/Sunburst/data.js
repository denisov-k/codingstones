import colors from './colors';

const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: 'Fiction',
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: 'Novels',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'Pain'
              },
              {
                name: 'Mercy'
              },
              {
                name: 'Downstairs tenant'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'The void cross'
              },
              {
                name: 'Silent confession'
              },
              {
                name: 'The end of childhood'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'Diary of a Mad Old Man'
              }
            ]
          }
        ]
      },
      {
        name: 'Other',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'The Complete Collection of Nabokov\'s\n Short Stories'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Requiem'
              },
              {
                name: 'Life Jigsaw Edition'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'I need you more than\n I love you'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Non-fiction',
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: 'Design',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'No interface interaction'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Lighting and Rendering Technology of Digital Drawing'
              },
              {
                name: 'Anatomy of Japanese Architecture'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'Fantasy world art\n& RPG Mapping Lecture'
              }
            ]
          }
        ]
      },
      {
        name: 'Social\nscience',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'Pain points'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Effective managers'
              },
              {
                name: 'Evolution'
              },
              {
                name: 'The advent of\nthe post-materialistic era'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'Madness and Civilization'
              }
            ]
          }
        ]
      },
      {
        name: 'Psychology',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'The Neurotic Personality of\nOur Time'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Pygmalion effect'
              },
              {
                name: 'Injured person'
              }
            ]
          },
          {
            name: '3☆'
          },
          {
            name: '2☆',
            children: [
              {
                name: 'Infatuated'
              }
            ]
          }
        ]
      },
      {
        name: 'Home',
        children: [
          {
            name: '4☆',
            children: [
              {
                name: 'Make a house'
              },
              {
                name: 'Live only what is necessary'
              },
              {
                name: 'Nordic minimalist style'
              }
            ]
          }
        ]
      },
      {
        name: 'Picture\nbook',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'Design poetry'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'If life fools you'
              },
              {
                name: 'The Naturalist\'s Guide\nto Mysterious Animals'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'Direction'
              }
            ]
          }
        ]
      },
      {
        name: 'Philosophy',
        children: [
          {
            name: '4☆',
            children: [
              {
                name: 'Wisdom of life'
              }
            ]
          }
        ]
      },
      {
        name: 'Technology',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'Clean code'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Three.js Development Guide'
              }
            ]
          }
        ]
      }
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0;
            return itemStyle.star5;
          case '4☆':
            bookScoreId = 1;
            return itemStyle.star4;
          case '3☆':
            bookScoreId = 2;
            return itemStyle.star3;
          case '2☆':
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}

export default data;