import en from '../../mock/locales/en.json';
import zh from '../../mock/locales/zh.json';

type LangFileType = Record<string, string>;

enum LANG {
  zh = 'zh',
  en = 'en',
}

export class I18n {
  /**
   * @description 缓存语言的key
   */
  public static cacheKey: string = 'locale';

  /**
   * @description 默认语言
   */
  public static get lang(): LANG {
    return localStorage[I18n.cacheKey] || LANG.zh;
  }

  /**
   * @description 语言文件
   */
  public static get locales(): LangFileType {
    return { zh, en }[I18n.lang] as LangFileType;
  }

  /**
   * @description 通过key获取对应的value
   */
  public static translate = (key: string): string => I18n.locales[key];

  /**
   * @description 语言切换
   */
  public static setLanguage = (): void => {
    if (I18n.lang == LANG.zh) {
      localStorage[I18n.cacheKey] = LANG.en;
      window.location.reload();
      return;
    }
    if (I18n.lang == LANG.en) {
      localStorage[I18n.cacheKey] = LANG.zh;
      window.location.reload();
      return;
    }
  };
}
