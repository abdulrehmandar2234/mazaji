export const getAllGenre = {
  security: {
    jwt: []
  },
  tags: ['Genre'],
  description: 'This route allow to get all genres',
  opeationId: 'getAllGenre',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'en_MX'
    }
  ],
  responses: {
    200: {
      description: 'Get All Genres',
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
                example: 'Found Genres Successfully.'
              },
              genres: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    genrename: {
                      type: 'string',
                      example: 'Action'
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
                example: 'No Genres Found'
              }
            }
          }
        }
      }
    }
  }
};

export const getGenre = {
  security: {
    jwt: []
  },
  tags: ['Genre'],
  description: "This route allow to get genre using it's ID",
  opeationId: 'getGenre',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'en_MX'
    },
    {
      in: 'path',
      name: 'id',
      type: 'string',
      description: 'Genre ID'
    }
  ],
  responses: {
    200: {
      description: "Get genre using it's ID",
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
                example: 'Genre Found Successfully.'
              },
              genre: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    genrename: {
                      type: 'string',
                      example: 'Action'
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
                example: 'No Genre Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};

export const createGenre = {
  tags: ['Genre'],
  description: 'This route allow only admin to create new genre',
  opeationId: 'createGenre',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'ar_MX'
    }
  ],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            genrename: {
              type: 'string',
              required: true
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Create new genre',
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
                example: 'Genre Created Successfully.'
              },
              genres: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    genrename: {
                      type: 'string',
                      example: 'Action'
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

export const updateGenre = {
  tags: ['Genre'],
  description: 'This route allow only admin to update genre name',
  opeationId: 'updateGenre',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'ar_MX'
    },
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Genre ID'
    }
  ],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            genrename: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated genre',
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
                example: 'Genre Details Updated Successfully.'
              },
              genre: {
                type: 'object',
                items: {
                  type: 'object',
                  properties: {
                    genrename: {
                      type: 'string',
                      example: 'Action'
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
                example: 'No Genre Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};

export const deleteGenre = {
  tags: ['Genre'],
  description: 'This route allow only admin to delete the genre',
  opeationId: 'deleteGenre',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'en_MX'
    },
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Genre ID'
    }
  ],
  responses: {
    200: {
      description: 'Delete genre',
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
                example: 'Genre Deleted Successfully.'
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
                example: 'No Genre Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
