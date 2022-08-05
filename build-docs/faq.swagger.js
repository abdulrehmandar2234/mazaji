"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFaq = exports.getFaq = exports.getAllFaq = exports.deleteFaq = exports.addFaq = void 0;
const getAllFaq = {
  security: {
    jwt: []
  },
  tags: ['Faq'],
  description: 'This route allow to get all faqs',
  opeationId: 'getAllFaq',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }],
  responses: {
    200: {
      description: 'Get All Faqs',
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
                example: 'Found Faqs Successfully.'
              },
              faqs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    question: {
                      type: 'string',
                      example: 'Are you Ok.'
                    },
                    answer: {
                      type: 'string',
                      example: 'Yes, I am fine.'
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
                example: 'No Faqs Found'
              }
            }
          }
        }
      }
    }
  }
};
exports.getAllFaq = getAllFaq;
const getFaq = {
  security: {
    jwt: []
  },
  tags: ['Faq'],
  description: "This route allow to get faq using it's ID",
  opeationId: 'getFaq',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'string',
    description: 'Faq ID'
  }],
  responses: {
    200: {
      description: "Get faq using it's ID",
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
                example: 'Faq Found Successfully.'
              },
              faq: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    }
                  },
                  question: {
                    type: 'string',
                    example: 'Are you Ok.'
                  },
                  answer: {
                    type: 'string',
                    example: 'Yes, I am fine.'
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
              example: 'No Faq Found With This ID: {id}'
            }
          }
        }
      }
    }
  }
};
exports.getFaq = getFaq;
const addFaq = {
  tags: ['Faq'],
  description: 'This route allow only admin to add new faq',
  opeationId: 'addFaq',
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
            question: {
              type: 'string',
              example: 'Are you Ok.'
            },
            answer: {
              type: 'string',
              example: 'Yes, I am fine.'
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Add new faq',
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
                example: 'Faq Created Successfully.'
              },
              faq: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    question: {
                      type: 'string',
                      example: 'Are you Ok.'
                    },
                    answer: {
                      type: 'string',
                      example: 'Yes, I am fine.'
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
exports.addFaq = addFaq;
const updateFaq = {
  tags: ['Faq'],
  description: 'This route allow only admin to update faqs',
  opeationId: 'updateFaq',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'ar_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Faq ID'
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            question: {
              type: 'string'
            },
            answer: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated faq',
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
                example: 'Faq Updated Successfully.'
              },
              faq: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    }
                  },
                  question: {
                    type: 'string',
                    example: 'Are you Ok.'
                  },
                  answer: {
                    type: 'string',
                    example: 'Yes, I am fine.'
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
                example: 'No Faq Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.updateFaq = updateFaq;
const deleteFaq = {
  tags: ['Faq'],
  description: 'This route allow only admin to delete the faq',
  opeationId: 'deleteFaq',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Faq ID'
  }],
  responses: {
    200: {
      description: 'Delete faq',
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
                example: 'Faq Deleted Successfully.'
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
                example: 'No Faq Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.deleteFaq = deleteFaq;