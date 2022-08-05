"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEventCoverImage = exports.updateEvent = exports.getEvent = exports.getAllEvent = exports.deleteEvent = exports.createEvent = void 0;
const getAllEvent = {
  security: {
    jwt: []
  },
  tags: ['Event'],
  description: 'This route allow to get all events',
  opeationId: 'getAllEvent',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }],
  responses: {
    200: {
      description: 'Get All Events',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Found Events Successfully.'
              },
              events: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Qawali Night'
                    },
                    location: {
                      type: 'string',
                      example: 'Johar town'
                    },
                    date: {
                      type: 'date',
                      example: '10-12-2022'
                    },
                    time: {
                      type: 'string',
                      example: '02:00 pm'
                    },
                    url: {
                      type: 'string',
                      example: 'https://example.com'
                    },
                    image: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageCoverId: {
                      type: 'string',
                      example: 'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Events Found'
              }
            }
          }
        }
      }
    }
  }
};
exports.getAllEvent = getAllEvent;
const getEvent = {
  security: {
    jwt: []
  },
  tags: ['Event'],
  description: "This route allow to get event using it's ID",
  opeationId: 'getEvent',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'string',
    description: 'Event ID'
  }],
  responses: {
    200: {
      description: "Get event using it's ID",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Event Found Successfully.'
              },
              event: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Qawali Night'
                    },
                    location: {
                      type: 'string',
                      example: 'Johar town'
                    },
                    date: {
                      type: 'date',
                      example: '10-12-2022'
                    },
                    time: {
                      type: 'string',
                      example: '02:00 pm'
                    },
                    url: {
                      type: 'string',
                      example: 'https://example.com'
                    },
                    image: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageCoverId: {
                      type: 'string',
                      example: 'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Event Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.getEvent = getEvent;
const createEvent = {
  tags: ['Event'],
  description: 'This route allow only admin to create new event',
  opeationId: 'createEvent',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'ar_MX'
  }],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              required: true
            },
            location: {
              type: 'string',
              required: true
            },
            date: {
              type: 'date',
              required: true
            },
            time: {
              type: 'string',
              required: true
            },
            url: {
              type: 'string',
              required: true
            },
            coverImage: {
              type: 'string',
              formate: 'binary',
              required: true
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Create new event',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Event Created Successfully.'
              },
              event: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Qawali Night'
                    },
                    location: {
                      type: 'string',
                      example: 'Johar town'
                    },
                    date: {
                      type: 'date',
                      example: '10-12-2022'
                    },
                    time: {
                      type: 'string',
                      example: '02:00 pm'
                    },
                    url: {
                      type: 'string',
                      example: 'https://example.com'
                    },
                    image: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageCoverId: {
                      type: 'string',
                      example: 'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    400: {
      description: 'Error: 400',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'All Fields Are Required'
              }
            }
          }
        }
      }
    }
  }
};
exports.createEvent = createEvent;
const updateEvent = {
  tags: ['Event'],
  description: 'This route allow only admin to update event details [name / location]',
  opeationId: 'updateEventDetails',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'ar_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Event ID'
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            location: {
              type: 'string'
            },
            date: {
              type: 'date'
            },
            time: {
              type: 'string'
            },
            url: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated event details',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Event Details Updated Successfully.'
              },
              event: {
                type: 'object',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      example: 'Qawali Night'
                    },
                    location: {
                      type: 'string',
                      example: 'Johar town'
                    },
                    date: {
                      type: 'date',
                      example: '10-12-2022'
                    },
                    time: {
                      type: 'string',
                      example: '02:00 pm'
                    },
                    url: {
                      type: 'string',
                      example: 'https://example.com'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Event Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.updateEvent = updateEvent;
const updateEventCoverImage = {
  tags: ['Event'],
  description: 'This route allow only admin to update event cover image [image]',
  opeationId: 'updateEventImage',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'ar_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Event ID'
  }],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            image: {
              type: 'string',
              format: 'image'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated event image',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Event Cover Image Updated Successfully.'
              },
              event: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Qawali Night'
                    },
                    location: {
                      type: 'string',
                      example: 'Johar town'
                    },
                    date: {
                      type: 'date',
                      example: '10-12-2022'
                    },
                    time: {
                      type: 'string',
                      example: '02:00 pm'
                    },
                    url: {
                      type: 'string',
                      example: 'https://example.com'
                    },
                    image: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageCoverId: {
                      type: 'string',
                      example: 'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    400: {
      description: 'Error: 400',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'Image Is Required, Please Upload an Image!'
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Event Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.updateEventCoverImage = updateEventCoverImage;
const deleteEvent = {
  tags: ['Event'],
  description: 'This route allow only admin to delete the event',
  opeationId: 'deleteEvent',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Event ID'
  }],
  responses: {
    200: {
      description: 'Delete event',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Event Deleted Successfully.'
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Event Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.deleteEvent = deleteEvent;