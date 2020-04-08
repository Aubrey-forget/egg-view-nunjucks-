'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    const title = '我是首页'; // 向模板传入数据
    await this.ctx.render('index', {
      title,
    });
  }

  async news() {
    const title = '新闻';
    await this.ctx.render('news', {
      title,
    });
  }
}

module.exports = HomeController;
