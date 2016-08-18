module.exports = {
  'Room of Requirement': {
    north: 'wall',
    east: 'Chamber of Secrets',
    south: 'wall',
    west: 'wall'
  },
  'Chamber of Secrets': {
    north: 'wall',
    east: 'Great Lake',
    south: 'wall',
    west: 'Room of Requirement'
  },
  'Great Lake': {
    north: 'wall',
    east: 'wall',
    south: 'Triwizard Maze',
    west: 'Chamber of Secrets'
  },
  'Triwizard Maze': {
    north: 'Great Lake',
    east: 'wall',
    south: 'Department of Mysteries',
    west: 'wall'
  },
  'Department of Mysteries': {
    north: 'Triwizard Maze',
    east: 'wall',
    south: 'wall',
    west: 'Cave by the Sea'
  },
  'Cave by the Sea': {
    north: 'wall',
    east: 'Department of Mysteries',
    south: 'wall',
    west: 'Hogwarts Castle'
  },
  'Hogwarts Castle': {
    north: 'wall',
    east: 'Cave by the Sea',
    south: 'Hogsmeade',
    west: 'wall'
  },
  'Hogsmeade': {
    north: 'Hogwarts Castle',
    east: 'wall',
    south: 'wall',
    west: 'wall'
  }
};
