"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchAd = exports.updateAds = exports.getAdsByAdmin = exports.getAds = exports.deleteAds = exports.addAds = void 0;
const getAds = {
  security: {
    jwt: []
  },
  tags: ['Ads'],
  description: 'This route allow to get all ads',
  opeationId: 'getAds',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }],
  responses: {
    200: {
      description: 'Get All Ads',
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
                example: 'Found Ads Successfully.'
              },
              ads: {
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
                      example: 'Video ad'
                    },
                    adsFile: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    thumbnail: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    watchedby: {
                      type: 'string',
                      example: '123'
                    },
                    adDuration: {
                      type: 'number',
                      example: '20'
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
                example: 'No Ads Found'
              }
            }
          }
        }
      }
    }
  }
};
exports.getAds = getAds;
const getAdsByAdmin = {
  security: {
    jwt: []
  },
  tags: ['Ads'],
  description: 'This route allow to get all ads by admin',
  opeationId: 'getAds',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }],
  responses: {
    200: {
      description: 'Get All Ads by admin',
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
                example: 'Found Ads Successfully.'
              },
              ads: {
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
                      example: 'Video ad'
                    },
                    adsFile: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    thumbnail: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    watchedby: {
                      type: 'string',
                      example: '123'
                    },
                    adDuration: {
                      type: 'number',
                      example: '20'
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
                example: 'No Ads Found'
              }
            }
          }
        }
      }
    }
  }
};
exports.getAdsByAdmin = getAdsByAdmin;
const addAds = {
  tags: ['Ads'],
  description: 'This route allow only admin to add new ads',
  opeationId: 'addads',
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
              example: 'Video ad'
            },
            adsFile: {
              type: 'string',
              example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
            },
            thumbnail: {
              type: 'string',
              example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
            },
            watchedby: {
              type: 'string',
              example: '123'
            },
            adDuration: {
              type: 'number',
              example: '20'
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Add new Ads',
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
                example: 'Ads Created Successfully.'
              },
              ad: {
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
                      example: 'Video ad'
                    },
                    adsFile: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    thumbnail: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    watchedby: {
                      type: 'string',
                      example: '123'
                    },
                    adDuration: {
                      type: 'number',
                      example: '20'
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
exports.addAds = addAds;
const updateAds = {
  tags: ['Ads'],
  description: 'This route allow only admin to update ads',
  opeationId: 'updateAds',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'ar_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Ad ID'
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
            adsFile: {
              type: 'string'
            },
            thumbnail: {
              type: 'string'
            },
            watchedby: {
              type: 'string'
            },
            adDuration: {
              type: 'number'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated ad',
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
                example: 'ad Updated Successfully.'
              },
              ad: {
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
                      example: 'Video ad'
                    },
                    adsFile: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    thumbnail: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    watchedby: {
                      type: 'string',
                      example: '123'
                    },
                    adDuration: {
                      type: 'number',
                      example: '20'
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
                example: 'No ad Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.updateAds = updateAds;
const deleteAds = {
  tags: ['Ads'],
  description: 'This route allow only admin to delete the ads',
  opeationId: 'deleteAds',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'integer',
    description: 'Ads ID'
  }],
  responses: {
    200: {
      description: 'Delete ads',
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
                example: 'Ads Deleted Successfully.'
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
                example: 'No Ads Found With This ID: {id}'
              }
            }
          }
        }
      }
    }
  }
};
exports.deleteAds = deleteAds;
const watchAd = {
  security: {
    jwt: []
  },
  tags: ['Ads'],
  description: "This route allow to get wached ads using it's ID and User ID",
  opeationId: 'watchAd',
  parameters: [{
    in: 'header',
    name: 'Accept-Language',
    type: 'string',
    example: 'en_MX'
  }, {
    in: 'path',
    name: 'id',
    type: 'string',
    description: 'Ad ID'
  }],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            duration: {
              type: 'number',
              example: '20'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: "Get ads using it's ID",
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
                example: 'Ads Found Successfully.'
              },
              ads: {
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
                      example: 'Video ad'
                    },
                    adsFile: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    thumbnail: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/dknma8cck/image/upload/v1629447042/EcommerceAPI/Products/LenovoYoga914ITL5Laptop-IntelCorei7-1185G7%2C14InchUHD%2C1TBSSD%2C16GBRAM%2CIntegratedIntelIrisXeGraphics%2CWindows-ShadowBlack/ivz6pdoeo61hwbe5fos4.webp'
                    },
                    watchedby: {
                      type: 'string',
                      example: '123'
                    },
                    adDuration: {
                      type: 'number',
                      example: '20'
                    }
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
              example: 'No Ads Found With This ID: {id}'
            }
          }
        }
      }
    }
  }
};
exports.watchAd = watchAd;