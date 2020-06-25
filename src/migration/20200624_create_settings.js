


export default {
  name: "20200624_create_settings",
  async run(runner) {
    const queries = [`
      CREATE TABLE IF NOT EXISTS user_setting (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "section" varchar(255),
        "key" varchar(255) UNIQUE NOT NULL,
        "userValue" varchar(255),
        "defaultValue" varchar(255) NOT NULL,
        "linuxDefault" varchar(255),
        "macDefault" varchar(255),
        "windowsDefault" varchar(255),
        "valueType" integer NOT NULL DEFAULT 0,
        "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
        "version" integer NOT NULL DEFAULT 0
      )
    `,
    `INSERT INTO user_setting(key, defaultValue, linuxDefault, windowsDefault) VALUES
    ('theme', 'system', 'dark', null),
    ('menuStyle', 'native', null, 'client')
    `
    ]
    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      await runner.query(query)
    }
  }
}