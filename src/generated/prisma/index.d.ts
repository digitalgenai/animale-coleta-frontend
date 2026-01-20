
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Concorrente
 * 
 */
export type Concorrente = $Result.DefaultSelection<Prisma.$ConcorrentePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Missao
 * 
 */
export type Missao = $Result.DefaultSelection<Prisma.$MissaoPayload>
/**
 * Model MissaoProduto
 * 
 */
export type MissaoProduto = $Result.DefaultSelection<Prisma.$MissaoProdutoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.concorrente`: Exposes CRUD operations for the **Concorrente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concorrentes
    * const concorrentes = await prisma.concorrente.findMany()
    * ```
    */
  get concorrente(): Prisma.ConcorrenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missao`: Exposes CRUD operations for the **Missao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missaos
    * const missaos = await prisma.missao.findMany()
    * ```
    */
  get missao(): Prisma.MissaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missaoProduto`: Exposes CRUD operations for the **MissaoProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissaoProdutos
    * const missaoProdutos = await prisma.missaoProduto.findMany()
    * ```
    */
  get missaoProduto(): Prisma.MissaoProdutoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Concorrente: 'Concorrente',
    Produto: 'Produto',
    Missao: 'Missao',
    MissaoProduto: 'MissaoProduto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "concorrente" | "produto" | "missao" | "missaoProduto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Concorrente: {
        payload: Prisma.$ConcorrentePayload<ExtArgs>
        fields: Prisma.ConcorrenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConcorrenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConcorrenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          findFirst: {
            args: Prisma.ConcorrenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConcorrenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          findMany: {
            args: Prisma.ConcorrenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>[]
          }
          create: {
            args: Prisma.ConcorrenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          createMany: {
            args: Prisma.ConcorrenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConcorrenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>[]
          }
          delete: {
            args: Prisma.ConcorrenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          update: {
            args: Prisma.ConcorrenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          deleteMany: {
            args: Prisma.ConcorrenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConcorrenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConcorrenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>[]
          }
          upsert: {
            args: Prisma.ConcorrenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcorrentePayload>
          }
          aggregate: {
            args: Prisma.ConcorrenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConcorrente>
          }
          groupBy: {
            args: Prisma.ConcorrenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConcorrenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConcorrenteCountArgs<ExtArgs>
            result: $Utils.Optional<ConcorrenteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Missao: {
        payload: Prisma.$MissaoPayload<ExtArgs>
        fields: Prisma.MissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          findFirst: {
            args: Prisma.MissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          findMany: {
            args: Prisma.MissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>[]
          }
          create: {
            args: Prisma.MissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          createMany: {
            args: Prisma.MissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>[]
          }
          delete: {
            args: Prisma.MissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          update: {
            args: Prisma.MissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          deleteMany: {
            args: Prisma.MissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>[]
          }
          upsert: {
            args: Prisma.MissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoPayload>
          }
          aggregate: {
            args: Prisma.MissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissao>
          }
          groupBy: {
            args: Prisma.MissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissaoCountArgs<ExtArgs>
            result: $Utils.Optional<MissaoCountAggregateOutputType> | number
          }
        }
      }
      MissaoProduto: {
        payload: Prisma.$MissaoProdutoPayload<ExtArgs>
        fields: Prisma.MissaoProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissaoProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissaoProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          findFirst: {
            args: Prisma.MissaoProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissaoProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          findMany: {
            args: Prisma.MissaoProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>[]
          }
          create: {
            args: Prisma.MissaoProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          createMany: {
            args: Prisma.MissaoProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissaoProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>[]
          }
          delete: {
            args: Prisma.MissaoProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          update: {
            args: Prisma.MissaoProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          deleteMany: {
            args: Prisma.MissaoProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissaoProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissaoProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>[]
          }
          upsert: {
            args: Prisma.MissaoProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissaoProdutoPayload>
          }
          aggregate: {
            args: Prisma.MissaoProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissaoProduto>
          }
          groupBy: {
            args: Prisma.MissaoProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissaoProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissaoProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<MissaoProdutoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    concorrente?: ConcorrenteOmit
    produto?: ProdutoOmit
    missao?: MissaoOmit
    missaoProduto?: MissaoProdutoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConcorrenteCountOutputType
   */

  export type ConcorrenteCountOutputType = {
    missoes: number
  }

  export type ConcorrenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | ConcorrenteCountOutputTypeCountMissoesArgs
  }

  // Custom InputTypes
  /**
   * ConcorrenteCountOutputType without action
   */
  export type ConcorrenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConcorrenteCountOutputType
     */
    select?: ConcorrenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConcorrenteCountOutputType without action
   */
  export type ConcorrenteCountOutputTypeCountMissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissaoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    missoes: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | ProdutoCountOutputTypeCountMissoesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountMissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissaoProdutoWhereInput
  }


  /**
   * Count Type MissaoCountOutputType
   */

  export type MissaoCountOutputType = {
    produtos: number
  }

  export type MissaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | MissaoCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * MissaoCountOutputType without action
   */
  export type MissaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoCountOutputType
     */
    select?: MissaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissaoCountOutputType without action
   */
  export type MissaoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissaoProdutoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    foto: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    foto: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "foto", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      foto: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly foto: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Concorrente
   */

  export type AggregateConcorrente = {
    _count: ConcorrenteCountAggregateOutputType | null
    _avg: ConcorrenteAvgAggregateOutputType | null
    _sum: ConcorrenteSumAggregateOutputType | null
    _min: ConcorrenteMinAggregateOutputType | null
    _max: ConcorrenteMaxAggregateOutputType | null
  }

  export type ConcorrenteAvgAggregateOutputType = {
    id: number | null
  }

  export type ConcorrenteSumAggregateOutputType = {
    id: number | null
  }

  export type ConcorrenteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    endereco: string | null
    foto: string | null
  }

  export type ConcorrenteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    endereco: string | null
    foto: string | null
  }

  export type ConcorrenteCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    endereco: number
    foto: number
    _all: number
  }


  export type ConcorrenteAvgAggregateInputType = {
    id?: true
  }

  export type ConcorrenteSumAggregateInputType = {
    id?: true
  }

  export type ConcorrenteMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
  }

  export type ConcorrenteMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
  }

  export type ConcorrenteCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
    _all?: true
  }

  export type ConcorrenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concorrente to aggregate.
     */
    where?: ConcorrenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concorrentes to fetch.
     */
    orderBy?: ConcorrenteOrderByWithRelationInput | ConcorrenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConcorrenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Concorrentes
    **/
    _count?: true | ConcorrenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConcorrenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConcorrenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConcorrenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConcorrenteMaxAggregateInputType
  }

  export type GetConcorrenteAggregateType<T extends ConcorrenteAggregateArgs> = {
        [P in keyof T & keyof AggregateConcorrente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcorrente[P]>
      : GetScalarType<T[P], AggregateConcorrente[P]>
  }




  export type ConcorrenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcorrenteWhereInput
    orderBy?: ConcorrenteOrderByWithAggregationInput | ConcorrenteOrderByWithAggregationInput[]
    by: ConcorrenteScalarFieldEnum[] | ConcorrenteScalarFieldEnum
    having?: ConcorrenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConcorrenteCountAggregateInputType | true
    _avg?: ConcorrenteAvgAggregateInputType
    _sum?: ConcorrenteSumAggregateInputType
    _min?: ConcorrenteMinAggregateInputType
    _max?: ConcorrenteMaxAggregateInputType
  }

  export type ConcorrenteGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    endereco: string
    foto: string | null
    _count: ConcorrenteCountAggregateOutputType | null
    _avg: ConcorrenteAvgAggregateOutputType | null
    _sum: ConcorrenteSumAggregateOutputType | null
    _min: ConcorrenteMinAggregateOutputType | null
    _max: ConcorrenteMaxAggregateOutputType | null
  }

  type GetConcorrenteGroupByPayload<T extends ConcorrenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConcorrenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConcorrenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConcorrenteGroupByOutputType[P]>
            : GetScalarType<T[P], ConcorrenteGroupByOutputType[P]>
        }
      >
    >


  export type ConcorrenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
    missoes?: boolean | Concorrente$missoesArgs<ExtArgs>
    _count?: boolean | ConcorrenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concorrente"]>

  export type ConcorrenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["concorrente"]>

  export type ConcorrenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["concorrente"]>

  export type ConcorrenteSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
  }

  export type ConcorrenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "endereco" | "foto", ExtArgs["result"]["concorrente"]>
  export type ConcorrenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | Concorrente$missoesArgs<ExtArgs>
    _count?: boolean | ConcorrenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConcorrenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConcorrenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConcorrentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Concorrente"
    objects: {
      missoes: Prisma.$MissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      endereco: string
      foto: string | null
    }, ExtArgs["result"]["concorrente"]>
    composites: {}
  }

  type ConcorrenteGetPayload<S extends boolean | null | undefined | ConcorrenteDefaultArgs> = $Result.GetResult<Prisma.$ConcorrentePayload, S>

  type ConcorrenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConcorrenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConcorrenteCountAggregateInputType | true
    }

  export interface ConcorrenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Concorrente'], meta: { name: 'Concorrente' } }
    /**
     * Find zero or one Concorrente that matches the filter.
     * @param {ConcorrenteFindUniqueArgs} args - Arguments to find a Concorrente
     * @example
     * // Get one Concorrente
     * const concorrente = await prisma.concorrente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConcorrenteFindUniqueArgs>(args: SelectSubset<T, ConcorrenteFindUniqueArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Concorrente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConcorrenteFindUniqueOrThrowArgs} args - Arguments to find a Concorrente
     * @example
     * // Get one Concorrente
     * const concorrente = await prisma.concorrente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConcorrenteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConcorrenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concorrente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteFindFirstArgs} args - Arguments to find a Concorrente
     * @example
     * // Get one Concorrente
     * const concorrente = await prisma.concorrente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConcorrenteFindFirstArgs>(args?: SelectSubset<T, ConcorrenteFindFirstArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concorrente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteFindFirstOrThrowArgs} args - Arguments to find a Concorrente
     * @example
     * // Get one Concorrente
     * const concorrente = await prisma.concorrente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConcorrenteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConcorrenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Concorrentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concorrentes
     * const concorrentes = await prisma.concorrente.findMany()
     * 
     * // Get first 10 Concorrentes
     * const concorrentes = await prisma.concorrente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const concorrenteWithIdOnly = await prisma.concorrente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConcorrenteFindManyArgs>(args?: SelectSubset<T, ConcorrenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Concorrente.
     * @param {ConcorrenteCreateArgs} args - Arguments to create a Concorrente.
     * @example
     * // Create one Concorrente
     * const Concorrente = await prisma.concorrente.create({
     *   data: {
     *     // ... data to create a Concorrente
     *   }
     * })
     * 
     */
    create<T extends ConcorrenteCreateArgs>(args: SelectSubset<T, ConcorrenteCreateArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Concorrentes.
     * @param {ConcorrenteCreateManyArgs} args - Arguments to create many Concorrentes.
     * @example
     * // Create many Concorrentes
     * const concorrente = await prisma.concorrente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConcorrenteCreateManyArgs>(args?: SelectSubset<T, ConcorrenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Concorrentes and returns the data saved in the database.
     * @param {ConcorrenteCreateManyAndReturnArgs} args - Arguments to create many Concorrentes.
     * @example
     * // Create many Concorrentes
     * const concorrente = await prisma.concorrente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Concorrentes and only return the `id`
     * const concorrenteWithIdOnly = await prisma.concorrente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConcorrenteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConcorrenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Concorrente.
     * @param {ConcorrenteDeleteArgs} args - Arguments to delete one Concorrente.
     * @example
     * // Delete one Concorrente
     * const Concorrente = await prisma.concorrente.delete({
     *   where: {
     *     // ... filter to delete one Concorrente
     *   }
     * })
     * 
     */
    delete<T extends ConcorrenteDeleteArgs>(args: SelectSubset<T, ConcorrenteDeleteArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Concorrente.
     * @param {ConcorrenteUpdateArgs} args - Arguments to update one Concorrente.
     * @example
     * // Update one Concorrente
     * const concorrente = await prisma.concorrente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConcorrenteUpdateArgs>(args: SelectSubset<T, ConcorrenteUpdateArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Concorrentes.
     * @param {ConcorrenteDeleteManyArgs} args - Arguments to filter Concorrentes to delete.
     * @example
     * // Delete a few Concorrentes
     * const { count } = await prisma.concorrente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConcorrenteDeleteManyArgs>(args?: SelectSubset<T, ConcorrenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concorrentes
     * const concorrente = await prisma.concorrente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConcorrenteUpdateManyArgs>(args: SelectSubset<T, ConcorrenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concorrentes and returns the data updated in the database.
     * @param {ConcorrenteUpdateManyAndReturnArgs} args - Arguments to update many Concorrentes.
     * @example
     * // Update many Concorrentes
     * const concorrente = await prisma.concorrente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Concorrentes and only return the `id`
     * const concorrenteWithIdOnly = await prisma.concorrente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConcorrenteUpdateManyAndReturnArgs>(args: SelectSubset<T, ConcorrenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Concorrente.
     * @param {ConcorrenteUpsertArgs} args - Arguments to update or create a Concorrente.
     * @example
     * // Update or create a Concorrente
     * const concorrente = await prisma.concorrente.upsert({
     *   create: {
     *     // ... data to create a Concorrente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concorrente we want to update
     *   }
     * })
     */
    upsert<T extends ConcorrenteUpsertArgs>(args: SelectSubset<T, ConcorrenteUpsertArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteCountArgs} args - Arguments to filter Concorrentes to count.
     * @example
     * // Count the number of Concorrentes
     * const count = await prisma.concorrente.count({
     *   where: {
     *     // ... the filter for the Concorrentes we want to count
     *   }
     * })
    **/
    count<T extends ConcorrenteCountArgs>(
      args?: Subset<T, ConcorrenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConcorrenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concorrente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConcorrenteAggregateArgs>(args: Subset<T, ConcorrenteAggregateArgs>): Prisma.PrismaPromise<GetConcorrenteAggregateType<T>>

    /**
     * Group by Concorrente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConcorrenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConcorrenteGroupByArgs['orderBy'] }
        : { orderBy?: ConcorrenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConcorrenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcorrenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Concorrente model
   */
  readonly fields: ConcorrenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Concorrente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConcorrenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missoes<T extends Concorrente$missoesArgs<ExtArgs> = {}>(args?: Subset<T, Concorrente$missoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Concorrente model
   */
  interface ConcorrenteFieldRefs {
    readonly id: FieldRef<"Concorrente", 'Int'>
    readonly nome: FieldRef<"Concorrente", 'String'>
    readonly tipo: FieldRef<"Concorrente", 'String'>
    readonly endereco: FieldRef<"Concorrente", 'String'>
    readonly foto: FieldRef<"Concorrente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Concorrente findUnique
   */
  export type ConcorrenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter, which Concorrente to fetch.
     */
    where: ConcorrenteWhereUniqueInput
  }

  /**
   * Concorrente findUniqueOrThrow
   */
  export type ConcorrenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter, which Concorrente to fetch.
     */
    where: ConcorrenteWhereUniqueInput
  }

  /**
   * Concorrente findFirst
   */
  export type ConcorrenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter, which Concorrente to fetch.
     */
    where?: ConcorrenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concorrentes to fetch.
     */
    orderBy?: ConcorrenteOrderByWithRelationInput | ConcorrenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concorrentes.
     */
    cursor?: ConcorrenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concorrentes.
     */
    distinct?: ConcorrenteScalarFieldEnum | ConcorrenteScalarFieldEnum[]
  }

  /**
   * Concorrente findFirstOrThrow
   */
  export type ConcorrenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter, which Concorrente to fetch.
     */
    where?: ConcorrenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concorrentes to fetch.
     */
    orderBy?: ConcorrenteOrderByWithRelationInput | ConcorrenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concorrentes.
     */
    cursor?: ConcorrenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concorrentes.
     */
    distinct?: ConcorrenteScalarFieldEnum | ConcorrenteScalarFieldEnum[]
  }

  /**
   * Concorrente findMany
   */
  export type ConcorrenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter, which Concorrentes to fetch.
     */
    where?: ConcorrenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concorrentes to fetch.
     */
    orderBy?: ConcorrenteOrderByWithRelationInput | ConcorrenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Concorrentes.
     */
    cursor?: ConcorrenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concorrentes.
     */
    skip?: number
    distinct?: ConcorrenteScalarFieldEnum | ConcorrenteScalarFieldEnum[]
  }

  /**
   * Concorrente create
   */
  export type ConcorrenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Concorrente.
     */
    data: XOR<ConcorrenteCreateInput, ConcorrenteUncheckedCreateInput>
  }

  /**
   * Concorrente createMany
   */
  export type ConcorrenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Concorrentes.
     */
    data: ConcorrenteCreateManyInput | ConcorrenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Concorrente createManyAndReturn
   */
  export type ConcorrenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * The data used to create many Concorrentes.
     */
    data: ConcorrenteCreateManyInput | ConcorrenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Concorrente update
   */
  export type ConcorrenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Concorrente.
     */
    data: XOR<ConcorrenteUpdateInput, ConcorrenteUncheckedUpdateInput>
    /**
     * Choose, which Concorrente to update.
     */
    where: ConcorrenteWhereUniqueInput
  }

  /**
   * Concorrente updateMany
   */
  export type ConcorrenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Concorrentes.
     */
    data: XOR<ConcorrenteUpdateManyMutationInput, ConcorrenteUncheckedUpdateManyInput>
    /**
     * Filter which Concorrentes to update
     */
    where?: ConcorrenteWhereInput
    /**
     * Limit how many Concorrentes to update.
     */
    limit?: number
  }

  /**
   * Concorrente updateManyAndReturn
   */
  export type ConcorrenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * The data used to update Concorrentes.
     */
    data: XOR<ConcorrenteUpdateManyMutationInput, ConcorrenteUncheckedUpdateManyInput>
    /**
     * Filter which Concorrentes to update
     */
    where?: ConcorrenteWhereInput
    /**
     * Limit how many Concorrentes to update.
     */
    limit?: number
  }

  /**
   * Concorrente upsert
   */
  export type ConcorrenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Concorrente to update in case it exists.
     */
    where: ConcorrenteWhereUniqueInput
    /**
     * In case the Concorrente found by the `where` argument doesn't exist, create a new Concorrente with this data.
     */
    create: XOR<ConcorrenteCreateInput, ConcorrenteUncheckedCreateInput>
    /**
     * In case the Concorrente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConcorrenteUpdateInput, ConcorrenteUncheckedUpdateInput>
  }

  /**
   * Concorrente delete
   */
  export type ConcorrenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
    /**
     * Filter which Concorrente to delete.
     */
    where: ConcorrenteWhereUniqueInput
  }

  /**
   * Concorrente deleteMany
   */
  export type ConcorrenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concorrentes to delete
     */
    where?: ConcorrenteWhereInput
    /**
     * Limit how many Concorrentes to delete.
     */
    limit?: number
  }

  /**
   * Concorrente.missoes
   */
  export type Concorrente$missoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    where?: MissaoWhereInput
    orderBy?: MissaoOrderByWithRelationInput | MissaoOrderByWithRelationInput[]
    cursor?: MissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissaoScalarFieldEnum | MissaoScalarFieldEnum[]
  }

  /**
   * Concorrente without action
   */
  export type ConcorrenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concorrente
     */
    select?: ConcorrenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concorrente
     */
    omit?: ConcorrenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcorrenteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    codigo: string | null
    preco: number | null
    foto: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    codigo: string | null
    preco: number | null
    foto: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    codigo: number
    preco: number
    foto: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    preco?: true
    foto?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    preco?: true
    foto?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    preco?: true
    foto?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    codigo: string | null
    preco: number
    foto: string | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    preco?: boolean
    foto?: boolean
    missoes?: boolean | Produto$missoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    preco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    preco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    codigo?: boolean
    preco?: boolean
    foto?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigo" | "preco" | "foto", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | Produto$missoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      missoes: Prisma.$MissaoProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      codigo: string | null
      preco: number
      foto: string | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missoes<T extends Produto$missoesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$missoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly codigo: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly foto: FieldRef<"Produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.missoes
   */
  export type Produto$missoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    where?: MissaoProdutoWhereInput
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    cursor?: MissaoProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissaoProdutoScalarFieldEnum | MissaoProdutoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Missao
   */

  export type AggregateMissao = {
    _count: MissaoCountAggregateOutputType | null
    _avg: MissaoAvgAggregateOutputType | null
    _sum: MissaoSumAggregateOutputType | null
    _min: MissaoMinAggregateOutputType | null
    _max: MissaoMaxAggregateOutputType | null
  }

  export type MissaoAvgAggregateOutputType = {
    id: number | null
    concorrenteId: number | null
  }

  export type MissaoSumAggregateOutputType = {
    id: number | null
    concorrenteId: number | null
  }

  export type MissaoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    status: string | null
    criadaEm: Date | null
    concorrenteId: number | null
  }

  export type MissaoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    status: string | null
    criadaEm: Date | null
    concorrenteId: number | null
  }

  export type MissaoCountAggregateOutputType = {
    id: number
    titulo: number
    status: number
    criadaEm: number
    concorrenteId: number
    _all: number
  }


  export type MissaoAvgAggregateInputType = {
    id?: true
    concorrenteId?: true
  }

  export type MissaoSumAggregateInputType = {
    id?: true
    concorrenteId?: true
  }

  export type MissaoMinAggregateInputType = {
    id?: true
    titulo?: true
    status?: true
    criadaEm?: true
    concorrenteId?: true
  }

  export type MissaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    status?: true
    criadaEm?: true
    concorrenteId?: true
  }

  export type MissaoCountAggregateInputType = {
    id?: true
    titulo?: true
    status?: true
    criadaEm?: true
    concorrenteId?: true
    _all?: true
  }

  export type MissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missao to aggregate.
     */
    where?: MissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missaos to fetch.
     */
    orderBy?: MissaoOrderByWithRelationInput | MissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missaos
    **/
    _count?: true | MissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissaoMaxAggregateInputType
  }

  export type GetMissaoAggregateType<T extends MissaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissao[P]>
      : GetScalarType<T[P], AggregateMissao[P]>
  }




  export type MissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissaoWhereInput
    orderBy?: MissaoOrderByWithAggregationInput | MissaoOrderByWithAggregationInput[]
    by: MissaoScalarFieldEnum[] | MissaoScalarFieldEnum
    having?: MissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissaoCountAggregateInputType | true
    _avg?: MissaoAvgAggregateInputType
    _sum?: MissaoSumAggregateInputType
    _min?: MissaoMinAggregateInputType
    _max?: MissaoMaxAggregateInputType
  }

  export type MissaoGroupByOutputType = {
    id: number
    titulo: string
    status: string
    criadaEm: Date
    concorrenteId: number
    _count: MissaoCountAggregateOutputType | null
    _avg: MissaoAvgAggregateOutputType | null
    _sum: MissaoSumAggregateOutputType | null
    _min: MissaoMinAggregateOutputType | null
    _max: MissaoMaxAggregateOutputType | null
  }

  type GetMissaoGroupByPayload<T extends MissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissaoGroupByOutputType[P]>
            : GetScalarType<T[P], MissaoGroupByOutputType[P]>
        }
      >
    >


  export type MissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    status?: boolean
    criadaEm?: boolean
    concorrenteId?: boolean
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
    produtos?: boolean | Missao$produtosArgs<ExtArgs>
    _count?: boolean | MissaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao"]>

  export type MissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    status?: boolean
    criadaEm?: boolean
    concorrenteId?: boolean
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao"]>

  export type MissaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    status?: boolean
    criadaEm?: boolean
    concorrenteId?: boolean
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao"]>

  export type MissaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    status?: boolean
    criadaEm?: boolean
    concorrenteId?: boolean
  }

  export type MissaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "status" | "criadaEm" | "concorrenteId", ExtArgs["result"]["missao"]>
  export type MissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
    produtos?: boolean | Missao$produtosArgs<ExtArgs>
    _count?: boolean | MissaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
  }
  export type MissaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concorrente?: boolean | ConcorrenteDefaultArgs<ExtArgs>
  }

  export type $MissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Missao"
    objects: {
      concorrente: Prisma.$ConcorrentePayload<ExtArgs>
      produtos: Prisma.$MissaoProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      status: string
      criadaEm: Date
      concorrenteId: number
    }, ExtArgs["result"]["missao"]>
    composites: {}
  }

  type MissaoGetPayload<S extends boolean | null | undefined | MissaoDefaultArgs> = $Result.GetResult<Prisma.$MissaoPayload, S>

  type MissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissaoCountAggregateInputType | true
    }

  export interface MissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Missao'], meta: { name: 'Missao' } }
    /**
     * Find zero or one Missao that matches the filter.
     * @param {MissaoFindUniqueArgs} args - Arguments to find a Missao
     * @example
     * // Get one Missao
     * const missao = await prisma.missao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissaoFindUniqueArgs>(args: SelectSubset<T, MissaoFindUniqueArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Missao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissaoFindUniqueOrThrowArgs} args - Arguments to find a Missao
     * @example
     * // Get one Missao
     * const missao = await prisma.missao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoFindFirstArgs} args - Arguments to find a Missao
     * @example
     * // Get one Missao
     * const missao = await prisma.missao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissaoFindFirstArgs>(args?: SelectSubset<T, MissaoFindFirstArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoFindFirstOrThrowArgs} args - Arguments to find a Missao
     * @example
     * // Get one Missao
     * const missao = await prisma.missao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missaos
     * const missaos = await prisma.missao.findMany()
     * 
     * // Get first 10 Missaos
     * const missaos = await prisma.missao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missaoWithIdOnly = await prisma.missao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissaoFindManyArgs>(args?: SelectSubset<T, MissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Missao.
     * @param {MissaoCreateArgs} args - Arguments to create a Missao.
     * @example
     * // Create one Missao
     * const Missao = await prisma.missao.create({
     *   data: {
     *     // ... data to create a Missao
     *   }
     * })
     * 
     */
    create<T extends MissaoCreateArgs>(args: SelectSubset<T, MissaoCreateArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missaos.
     * @param {MissaoCreateManyArgs} args - Arguments to create many Missaos.
     * @example
     * // Create many Missaos
     * const missao = await prisma.missao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissaoCreateManyArgs>(args?: SelectSubset<T, MissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missaos and returns the data saved in the database.
     * @param {MissaoCreateManyAndReturnArgs} args - Arguments to create many Missaos.
     * @example
     * // Create many Missaos
     * const missao = await prisma.missao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missaos and only return the `id`
     * const missaoWithIdOnly = await prisma.missao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Missao.
     * @param {MissaoDeleteArgs} args - Arguments to delete one Missao.
     * @example
     * // Delete one Missao
     * const Missao = await prisma.missao.delete({
     *   where: {
     *     // ... filter to delete one Missao
     *   }
     * })
     * 
     */
    delete<T extends MissaoDeleteArgs>(args: SelectSubset<T, MissaoDeleteArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Missao.
     * @param {MissaoUpdateArgs} args - Arguments to update one Missao.
     * @example
     * // Update one Missao
     * const missao = await prisma.missao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissaoUpdateArgs>(args: SelectSubset<T, MissaoUpdateArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missaos.
     * @param {MissaoDeleteManyArgs} args - Arguments to filter Missaos to delete.
     * @example
     * // Delete a few Missaos
     * const { count } = await prisma.missao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissaoDeleteManyArgs>(args?: SelectSubset<T, MissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missaos
     * const missao = await prisma.missao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissaoUpdateManyArgs>(args: SelectSubset<T, MissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missaos and returns the data updated in the database.
     * @param {MissaoUpdateManyAndReturnArgs} args - Arguments to update many Missaos.
     * @example
     * // Update many Missaos
     * const missao = await prisma.missao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missaos and only return the `id`
     * const missaoWithIdOnly = await prisma.missao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MissaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Missao.
     * @param {MissaoUpsertArgs} args - Arguments to update or create a Missao.
     * @example
     * // Update or create a Missao
     * const missao = await prisma.missao.upsert({
     *   create: {
     *     // ... data to create a Missao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missao we want to update
     *   }
     * })
     */
    upsert<T extends MissaoUpsertArgs>(args: SelectSubset<T, MissaoUpsertArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoCountArgs} args - Arguments to filter Missaos to count.
     * @example
     * // Count the number of Missaos
     * const count = await prisma.missao.count({
     *   where: {
     *     // ... the filter for the Missaos we want to count
     *   }
     * })
    **/
    count<T extends MissaoCountArgs>(
      args?: Subset<T, MissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissaoAggregateArgs>(args: Subset<T, MissaoAggregateArgs>): Prisma.PrismaPromise<GetMissaoAggregateType<T>>

    /**
     * Group by Missao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissaoGroupByArgs['orderBy'] }
        : { orderBy?: MissaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Missao model
   */
  readonly fields: MissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Missao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    concorrente<T extends ConcorrenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcorrenteDefaultArgs<ExtArgs>>): Prisma__ConcorrenteClient<$Result.GetResult<Prisma.$ConcorrentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produtos<T extends Missao$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Missao$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Missao model
   */
  interface MissaoFieldRefs {
    readonly id: FieldRef<"Missao", 'Int'>
    readonly titulo: FieldRef<"Missao", 'String'>
    readonly status: FieldRef<"Missao", 'String'>
    readonly criadaEm: FieldRef<"Missao", 'DateTime'>
    readonly concorrenteId: FieldRef<"Missao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Missao findUnique
   */
  export type MissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter, which Missao to fetch.
     */
    where: MissaoWhereUniqueInput
  }

  /**
   * Missao findUniqueOrThrow
   */
  export type MissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter, which Missao to fetch.
     */
    where: MissaoWhereUniqueInput
  }

  /**
   * Missao findFirst
   */
  export type MissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter, which Missao to fetch.
     */
    where?: MissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missaos to fetch.
     */
    orderBy?: MissaoOrderByWithRelationInput | MissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missaos.
     */
    cursor?: MissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missaos.
     */
    distinct?: MissaoScalarFieldEnum | MissaoScalarFieldEnum[]
  }

  /**
   * Missao findFirstOrThrow
   */
  export type MissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter, which Missao to fetch.
     */
    where?: MissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missaos to fetch.
     */
    orderBy?: MissaoOrderByWithRelationInput | MissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missaos.
     */
    cursor?: MissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missaos.
     */
    distinct?: MissaoScalarFieldEnum | MissaoScalarFieldEnum[]
  }

  /**
   * Missao findMany
   */
  export type MissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter, which Missaos to fetch.
     */
    where?: MissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missaos to fetch.
     */
    orderBy?: MissaoOrderByWithRelationInput | MissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missaos.
     */
    cursor?: MissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missaos.
     */
    skip?: number
    distinct?: MissaoScalarFieldEnum | MissaoScalarFieldEnum[]
  }

  /**
   * Missao create
   */
  export type MissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Missao.
     */
    data: XOR<MissaoCreateInput, MissaoUncheckedCreateInput>
  }

  /**
   * Missao createMany
   */
  export type MissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missaos.
     */
    data: MissaoCreateManyInput | MissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Missao createManyAndReturn
   */
  export type MissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * The data used to create many Missaos.
     */
    data: MissaoCreateManyInput | MissaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Missao update
   */
  export type MissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Missao.
     */
    data: XOR<MissaoUpdateInput, MissaoUncheckedUpdateInput>
    /**
     * Choose, which Missao to update.
     */
    where: MissaoWhereUniqueInput
  }

  /**
   * Missao updateMany
   */
  export type MissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missaos.
     */
    data: XOR<MissaoUpdateManyMutationInput, MissaoUncheckedUpdateManyInput>
    /**
     * Filter which Missaos to update
     */
    where?: MissaoWhereInput
    /**
     * Limit how many Missaos to update.
     */
    limit?: number
  }

  /**
   * Missao updateManyAndReturn
   */
  export type MissaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * The data used to update Missaos.
     */
    data: XOR<MissaoUpdateManyMutationInput, MissaoUncheckedUpdateManyInput>
    /**
     * Filter which Missaos to update
     */
    where?: MissaoWhereInput
    /**
     * Limit how many Missaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Missao upsert
   */
  export type MissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Missao to update in case it exists.
     */
    where: MissaoWhereUniqueInput
    /**
     * In case the Missao found by the `where` argument doesn't exist, create a new Missao with this data.
     */
    create: XOR<MissaoCreateInput, MissaoUncheckedCreateInput>
    /**
     * In case the Missao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissaoUpdateInput, MissaoUncheckedUpdateInput>
  }

  /**
   * Missao delete
   */
  export type MissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
    /**
     * Filter which Missao to delete.
     */
    where: MissaoWhereUniqueInput
  }

  /**
   * Missao deleteMany
   */
  export type MissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missaos to delete
     */
    where?: MissaoWhereInput
    /**
     * Limit how many Missaos to delete.
     */
    limit?: number
  }

  /**
   * Missao.produtos
   */
  export type Missao$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    where?: MissaoProdutoWhereInput
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    cursor?: MissaoProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissaoProdutoScalarFieldEnum | MissaoProdutoScalarFieldEnum[]
  }

  /**
   * Missao without action
   */
  export type MissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missao
     */
    select?: MissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missao
     */
    omit?: MissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoInclude<ExtArgs> | null
  }


  /**
   * Model MissaoProduto
   */

  export type AggregateMissaoProduto = {
    _count: MissaoProdutoCountAggregateOutputType | null
    _avg: MissaoProdutoAvgAggregateOutputType | null
    _sum: MissaoProdutoSumAggregateOutputType | null
    _min: MissaoProdutoMinAggregateOutputType | null
    _max: MissaoProdutoMaxAggregateOutputType | null
  }

  export type MissaoProdutoAvgAggregateOutputType = {
    id: number | null
    missaoId: number | null
    produtoId: number | null
  }

  export type MissaoProdutoSumAggregateOutputType = {
    id: number | null
    missaoId: number | null
    produtoId: number | null
  }

  export type MissaoProdutoMinAggregateOutputType = {
    id: number | null
    missaoId: number | null
    produtoId: number | null
  }

  export type MissaoProdutoMaxAggregateOutputType = {
    id: number | null
    missaoId: number | null
    produtoId: number | null
  }

  export type MissaoProdutoCountAggregateOutputType = {
    id: number
    missaoId: number
    produtoId: number
    _all: number
  }


  export type MissaoProdutoAvgAggregateInputType = {
    id?: true
    missaoId?: true
    produtoId?: true
  }

  export type MissaoProdutoSumAggregateInputType = {
    id?: true
    missaoId?: true
    produtoId?: true
  }

  export type MissaoProdutoMinAggregateInputType = {
    id?: true
    missaoId?: true
    produtoId?: true
  }

  export type MissaoProdutoMaxAggregateInputType = {
    id?: true
    missaoId?: true
    produtoId?: true
  }

  export type MissaoProdutoCountAggregateInputType = {
    id?: true
    missaoId?: true
    produtoId?: true
    _all?: true
  }

  export type MissaoProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissaoProduto to aggregate.
     */
    where?: MissaoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissaoProdutos to fetch.
     */
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissaoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissaoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissaoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissaoProdutos
    **/
    _count?: true | MissaoProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissaoProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissaoProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissaoProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissaoProdutoMaxAggregateInputType
  }

  export type GetMissaoProdutoAggregateType<T extends MissaoProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateMissaoProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissaoProduto[P]>
      : GetScalarType<T[P], AggregateMissaoProduto[P]>
  }




  export type MissaoProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissaoProdutoWhereInput
    orderBy?: MissaoProdutoOrderByWithAggregationInput | MissaoProdutoOrderByWithAggregationInput[]
    by: MissaoProdutoScalarFieldEnum[] | MissaoProdutoScalarFieldEnum
    having?: MissaoProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissaoProdutoCountAggregateInputType | true
    _avg?: MissaoProdutoAvgAggregateInputType
    _sum?: MissaoProdutoSumAggregateInputType
    _min?: MissaoProdutoMinAggregateInputType
    _max?: MissaoProdutoMaxAggregateInputType
  }

  export type MissaoProdutoGroupByOutputType = {
    id: number
    missaoId: number
    produtoId: number
    _count: MissaoProdutoCountAggregateOutputType | null
    _avg: MissaoProdutoAvgAggregateOutputType | null
    _sum: MissaoProdutoSumAggregateOutputType | null
    _min: MissaoProdutoMinAggregateOutputType | null
    _max: MissaoProdutoMaxAggregateOutputType | null
  }

  type GetMissaoProdutoGroupByPayload<T extends MissaoProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissaoProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissaoProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissaoProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], MissaoProdutoGroupByOutputType[P]>
        }
      >
    >


  export type MissaoProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missaoId?: boolean
    produtoId?: boolean
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missaoProduto"]>

  export type MissaoProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missaoId?: boolean
    produtoId?: boolean
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missaoProduto"]>

  export type MissaoProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missaoId?: boolean
    produtoId?: boolean
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missaoProduto"]>

  export type MissaoProdutoSelectScalar = {
    id?: boolean
    missaoId?: boolean
    produtoId?: boolean
  }

  export type MissaoProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missaoId" | "produtoId", ExtArgs["result"]["missaoProduto"]>
  export type MissaoProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type MissaoProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type MissaoProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao?: boolean | MissaoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $MissaoProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissaoProduto"
    objects: {
      missao: Prisma.$MissaoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missaoId: number
      produtoId: number
    }, ExtArgs["result"]["missaoProduto"]>
    composites: {}
  }

  type MissaoProdutoGetPayload<S extends boolean | null | undefined | MissaoProdutoDefaultArgs> = $Result.GetResult<Prisma.$MissaoProdutoPayload, S>

  type MissaoProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissaoProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissaoProdutoCountAggregateInputType | true
    }

  export interface MissaoProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissaoProduto'], meta: { name: 'MissaoProduto' } }
    /**
     * Find zero or one MissaoProduto that matches the filter.
     * @param {MissaoProdutoFindUniqueArgs} args - Arguments to find a MissaoProduto
     * @example
     * // Get one MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissaoProdutoFindUniqueArgs>(args: SelectSubset<T, MissaoProdutoFindUniqueArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissaoProduto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissaoProdutoFindUniqueOrThrowArgs} args - Arguments to find a MissaoProduto
     * @example
     * // Get one MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissaoProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, MissaoProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissaoProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoFindFirstArgs} args - Arguments to find a MissaoProduto
     * @example
     * // Get one MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissaoProdutoFindFirstArgs>(args?: SelectSubset<T, MissaoProdutoFindFirstArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissaoProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoFindFirstOrThrowArgs} args - Arguments to find a MissaoProduto
     * @example
     * // Get one MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissaoProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, MissaoProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissaoProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissaoProdutos
     * const missaoProdutos = await prisma.missaoProduto.findMany()
     * 
     * // Get first 10 MissaoProdutos
     * const missaoProdutos = await prisma.missaoProduto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missaoProdutoWithIdOnly = await prisma.missaoProduto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissaoProdutoFindManyArgs>(args?: SelectSubset<T, MissaoProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissaoProduto.
     * @param {MissaoProdutoCreateArgs} args - Arguments to create a MissaoProduto.
     * @example
     * // Create one MissaoProduto
     * const MissaoProduto = await prisma.missaoProduto.create({
     *   data: {
     *     // ... data to create a MissaoProduto
     *   }
     * })
     * 
     */
    create<T extends MissaoProdutoCreateArgs>(args: SelectSubset<T, MissaoProdutoCreateArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissaoProdutos.
     * @param {MissaoProdutoCreateManyArgs} args - Arguments to create many MissaoProdutos.
     * @example
     * // Create many MissaoProdutos
     * const missaoProduto = await prisma.missaoProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissaoProdutoCreateManyArgs>(args?: SelectSubset<T, MissaoProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissaoProdutos and returns the data saved in the database.
     * @param {MissaoProdutoCreateManyAndReturnArgs} args - Arguments to create many MissaoProdutos.
     * @example
     * // Create many MissaoProdutos
     * const missaoProduto = await prisma.missaoProduto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissaoProdutos and only return the `id`
     * const missaoProdutoWithIdOnly = await prisma.missaoProduto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissaoProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, MissaoProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissaoProduto.
     * @param {MissaoProdutoDeleteArgs} args - Arguments to delete one MissaoProduto.
     * @example
     * // Delete one MissaoProduto
     * const MissaoProduto = await prisma.missaoProduto.delete({
     *   where: {
     *     // ... filter to delete one MissaoProduto
     *   }
     * })
     * 
     */
    delete<T extends MissaoProdutoDeleteArgs>(args: SelectSubset<T, MissaoProdutoDeleteArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissaoProduto.
     * @param {MissaoProdutoUpdateArgs} args - Arguments to update one MissaoProduto.
     * @example
     * // Update one MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissaoProdutoUpdateArgs>(args: SelectSubset<T, MissaoProdutoUpdateArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissaoProdutos.
     * @param {MissaoProdutoDeleteManyArgs} args - Arguments to filter MissaoProdutos to delete.
     * @example
     * // Delete a few MissaoProdutos
     * const { count } = await prisma.missaoProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissaoProdutoDeleteManyArgs>(args?: SelectSubset<T, MissaoProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissaoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissaoProdutos
     * const missaoProduto = await prisma.missaoProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissaoProdutoUpdateManyArgs>(args: SelectSubset<T, MissaoProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissaoProdutos and returns the data updated in the database.
     * @param {MissaoProdutoUpdateManyAndReturnArgs} args - Arguments to update many MissaoProdutos.
     * @example
     * // Update many MissaoProdutos
     * const missaoProduto = await prisma.missaoProduto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissaoProdutos and only return the `id`
     * const missaoProdutoWithIdOnly = await prisma.missaoProduto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissaoProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, MissaoProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissaoProduto.
     * @param {MissaoProdutoUpsertArgs} args - Arguments to update or create a MissaoProduto.
     * @example
     * // Update or create a MissaoProduto
     * const missaoProduto = await prisma.missaoProduto.upsert({
     *   create: {
     *     // ... data to create a MissaoProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissaoProduto we want to update
     *   }
     * })
     */
    upsert<T extends MissaoProdutoUpsertArgs>(args: SelectSubset<T, MissaoProdutoUpsertArgs<ExtArgs>>): Prisma__MissaoProdutoClient<$Result.GetResult<Prisma.$MissaoProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissaoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoCountArgs} args - Arguments to filter MissaoProdutos to count.
     * @example
     * // Count the number of MissaoProdutos
     * const count = await prisma.missaoProduto.count({
     *   where: {
     *     // ... the filter for the MissaoProdutos we want to count
     *   }
     * })
    **/
    count<T extends MissaoProdutoCountArgs>(
      args?: Subset<T, MissaoProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissaoProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissaoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissaoProdutoAggregateArgs>(args: Subset<T, MissaoProdutoAggregateArgs>): Prisma.PrismaPromise<GetMissaoProdutoAggregateType<T>>

    /**
     * Group by MissaoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissaoProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissaoProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissaoProdutoGroupByArgs['orderBy'] }
        : { orderBy?: MissaoProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissaoProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissaoProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissaoProduto model
   */
  readonly fields: MissaoProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissaoProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissaoProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missao<T extends MissaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissaoDefaultArgs<ExtArgs>>): Prisma__MissaoClient<$Result.GetResult<Prisma.$MissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissaoProduto model
   */
  interface MissaoProdutoFieldRefs {
    readonly id: FieldRef<"MissaoProduto", 'Int'>
    readonly missaoId: FieldRef<"MissaoProduto", 'Int'>
    readonly produtoId: FieldRef<"MissaoProduto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MissaoProduto findUnique
   */
  export type MissaoProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which MissaoProduto to fetch.
     */
    where: MissaoProdutoWhereUniqueInput
  }

  /**
   * MissaoProduto findUniqueOrThrow
   */
  export type MissaoProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which MissaoProduto to fetch.
     */
    where: MissaoProdutoWhereUniqueInput
  }

  /**
   * MissaoProduto findFirst
   */
  export type MissaoProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which MissaoProduto to fetch.
     */
    where?: MissaoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissaoProdutos to fetch.
     */
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissaoProdutos.
     */
    cursor?: MissaoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissaoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissaoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissaoProdutos.
     */
    distinct?: MissaoProdutoScalarFieldEnum | MissaoProdutoScalarFieldEnum[]
  }

  /**
   * MissaoProduto findFirstOrThrow
   */
  export type MissaoProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which MissaoProduto to fetch.
     */
    where?: MissaoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissaoProdutos to fetch.
     */
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissaoProdutos.
     */
    cursor?: MissaoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissaoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissaoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissaoProdutos.
     */
    distinct?: MissaoProdutoScalarFieldEnum | MissaoProdutoScalarFieldEnum[]
  }

  /**
   * MissaoProduto findMany
   */
  export type MissaoProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which MissaoProdutos to fetch.
     */
    where?: MissaoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissaoProdutos to fetch.
     */
    orderBy?: MissaoProdutoOrderByWithRelationInput | MissaoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissaoProdutos.
     */
    cursor?: MissaoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissaoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissaoProdutos.
     */
    skip?: number
    distinct?: MissaoProdutoScalarFieldEnum | MissaoProdutoScalarFieldEnum[]
  }

  /**
   * MissaoProduto create
   */
  export type MissaoProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a MissaoProduto.
     */
    data: XOR<MissaoProdutoCreateInput, MissaoProdutoUncheckedCreateInput>
  }

  /**
   * MissaoProduto createMany
   */
  export type MissaoProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissaoProdutos.
     */
    data: MissaoProdutoCreateManyInput | MissaoProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissaoProduto createManyAndReturn
   */
  export type MissaoProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many MissaoProdutos.
     */
    data: MissaoProdutoCreateManyInput | MissaoProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissaoProduto update
   */
  export type MissaoProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a MissaoProduto.
     */
    data: XOR<MissaoProdutoUpdateInput, MissaoProdutoUncheckedUpdateInput>
    /**
     * Choose, which MissaoProduto to update.
     */
    where: MissaoProdutoWhereUniqueInput
  }

  /**
   * MissaoProduto updateMany
   */
  export type MissaoProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissaoProdutos.
     */
    data: XOR<MissaoProdutoUpdateManyMutationInput, MissaoProdutoUncheckedUpdateManyInput>
    /**
     * Filter which MissaoProdutos to update
     */
    where?: MissaoProdutoWhereInput
    /**
     * Limit how many MissaoProdutos to update.
     */
    limit?: number
  }

  /**
   * MissaoProduto updateManyAndReturn
   */
  export type MissaoProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * The data used to update MissaoProdutos.
     */
    data: XOR<MissaoProdutoUpdateManyMutationInput, MissaoProdutoUncheckedUpdateManyInput>
    /**
     * Filter which MissaoProdutos to update
     */
    where?: MissaoProdutoWhereInput
    /**
     * Limit how many MissaoProdutos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissaoProduto upsert
   */
  export type MissaoProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the MissaoProduto to update in case it exists.
     */
    where: MissaoProdutoWhereUniqueInput
    /**
     * In case the MissaoProduto found by the `where` argument doesn't exist, create a new MissaoProduto with this data.
     */
    create: XOR<MissaoProdutoCreateInput, MissaoProdutoUncheckedCreateInput>
    /**
     * In case the MissaoProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissaoProdutoUpdateInput, MissaoProdutoUncheckedUpdateInput>
  }

  /**
   * MissaoProduto delete
   */
  export type MissaoProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
    /**
     * Filter which MissaoProduto to delete.
     */
    where: MissaoProdutoWhereUniqueInput
  }

  /**
   * MissaoProduto deleteMany
   */
  export type MissaoProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissaoProdutos to delete
     */
    where?: MissaoProdutoWhereInput
    /**
     * Limit how many MissaoProdutos to delete.
     */
    limit?: number
  }

  /**
   * MissaoProduto without action
   */
  export type MissaoProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissaoProduto
     */
    select?: MissaoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissaoProduto
     */
    omit?: MissaoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissaoProdutoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    foto: 'foto'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ConcorrenteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    endereco: 'endereco',
    foto: 'foto'
  };

  export type ConcorrenteScalarFieldEnum = (typeof ConcorrenteScalarFieldEnum)[keyof typeof ConcorrenteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigo: 'codigo',
    preco: 'preco',
    foto: 'foto'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const MissaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    status: 'status',
    criadaEm: 'criadaEm',
    concorrenteId: 'concorrenteId'
  };

  export type MissaoScalarFieldEnum = (typeof MissaoScalarFieldEnum)[keyof typeof MissaoScalarFieldEnum]


  export const MissaoProdutoScalarFieldEnum: {
    id: 'id',
    missaoId: 'missaoId',
    produtoId: 'produtoId'
  };

  export type MissaoProdutoScalarFieldEnum = (typeof MissaoProdutoScalarFieldEnum)[keyof typeof MissaoProdutoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    foto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type ConcorrenteWhereInput = {
    AND?: ConcorrenteWhereInput | ConcorrenteWhereInput[]
    OR?: ConcorrenteWhereInput[]
    NOT?: ConcorrenteWhereInput | ConcorrenteWhereInput[]
    id?: IntFilter<"Concorrente"> | number
    nome?: StringFilter<"Concorrente"> | string
    tipo?: StringFilter<"Concorrente"> | string
    endereco?: StringFilter<"Concorrente"> | string
    foto?: StringNullableFilter<"Concorrente"> | string | null
    missoes?: MissaoListRelationFilter
  }

  export type ConcorrenteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    missoes?: MissaoOrderByRelationAggregateInput
  }

  export type ConcorrenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConcorrenteWhereInput | ConcorrenteWhereInput[]
    OR?: ConcorrenteWhereInput[]
    NOT?: ConcorrenteWhereInput | ConcorrenteWhereInput[]
    nome?: StringFilter<"Concorrente"> | string
    tipo?: StringFilter<"Concorrente"> | string
    endereco?: StringFilter<"Concorrente"> | string
    foto?: StringNullableFilter<"Concorrente"> | string | null
    missoes?: MissaoListRelationFilter
  }, "id">

  export type ConcorrenteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: ConcorrenteCountOrderByAggregateInput
    _avg?: ConcorrenteAvgOrderByAggregateInput
    _max?: ConcorrenteMaxOrderByAggregateInput
    _min?: ConcorrenteMinOrderByAggregateInput
    _sum?: ConcorrenteSumOrderByAggregateInput
  }

  export type ConcorrenteScalarWhereWithAggregatesInput = {
    AND?: ConcorrenteScalarWhereWithAggregatesInput | ConcorrenteScalarWhereWithAggregatesInput[]
    OR?: ConcorrenteScalarWhereWithAggregatesInput[]
    NOT?: ConcorrenteScalarWhereWithAggregatesInput | ConcorrenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Concorrente"> | number
    nome?: StringWithAggregatesFilter<"Concorrente"> | string
    tipo?: StringWithAggregatesFilter<"Concorrente"> | string
    endereco?: StringWithAggregatesFilter<"Concorrente"> | string
    foto?: StringNullableWithAggregatesFilter<"Concorrente"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    codigo?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    foto?: StringNullableFilter<"Produto"> | string | null
    missoes?: MissaoProdutoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrderInput | SortOrder
    preco?: SortOrder
    foto?: SortOrderInput | SortOrder
    missoes?: MissaoProdutoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    codigo?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    foto?: StringNullableFilter<"Produto"> | string | null
    missoes?: MissaoProdutoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrderInput | SortOrder
    preco?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    codigo?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    foto?: StringNullableWithAggregatesFilter<"Produto"> | string | null
  }

  export type MissaoWhereInput = {
    AND?: MissaoWhereInput | MissaoWhereInput[]
    OR?: MissaoWhereInput[]
    NOT?: MissaoWhereInput | MissaoWhereInput[]
    id?: IntFilter<"Missao"> | number
    titulo?: StringFilter<"Missao"> | string
    status?: StringFilter<"Missao"> | string
    criadaEm?: DateTimeFilter<"Missao"> | Date | string
    concorrenteId?: IntFilter<"Missao"> | number
    concorrente?: XOR<ConcorrenteScalarRelationFilter, ConcorrenteWhereInput>
    produtos?: MissaoProdutoListRelationFilter
  }

  export type MissaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    status?: SortOrder
    criadaEm?: SortOrder
    concorrenteId?: SortOrder
    concorrente?: ConcorrenteOrderByWithRelationInput
    produtos?: MissaoProdutoOrderByRelationAggregateInput
  }

  export type MissaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissaoWhereInput | MissaoWhereInput[]
    OR?: MissaoWhereInput[]
    NOT?: MissaoWhereInput | MissaoWhereInput[]
    titulo?: StringFilter<"Missao"> | string
    status?: StringFilter<"Missao"> | string
    criadaEm?: DateTimeFilter<"Missao"> | Date | string
    concorrenteId?: IntFilter<"Missao"> | number
    concorrente?: XOR<ConcorrenteScalarRelationFilter, ConcorrenteWhereInput>
    produtos?: MissaoProdutoListRelationFilter
  }, "id">

  export type MissaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    status?: SortOrder
    criadaEm?: SortOrder
    concorrenteId?: SortOrder
    _count?: MissaoCountOrderByAggregateInput
    _avg?: MissaoAvgOrderByAggregateInput
    _max?: MissaoMaxOrderByAggregateInput
    _min?: MissaoMinOrderByAggregateInput
    _sum?: MissaoSumOrderByAggregateInput
  }

  export type MissaoScalarWhereWithAggregatesInput = {
    AND?: MissaoScalarWhereWithAggregatesInput | MissaoScalarWhereWithAggregatesInput[]
    OR?: MissaoScalarWhereWithAggregatesInput[]
    NOT?: MissaoScalarWhereWithAggregatesInput | MissaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Missao"> | number
    titulo?: StringWithAggregatesFilter<"Missao"> | string
    status?: StringWithAggregatesFilter<"Missao"> | string
    criadaEm?: DateTimeWithAggregatesFilter<"Missao"> | Date | string
    concorrenteId?: IntWithAggregatesFilter<"Missao"> | number
  }

  export type MissaoProdutoWhereInput = {
    AND?: MissaoProdutoWhereInput | MissaoProdutoWhereInput[]
    OR?: MissaoProdutoWhereInput[]
    NOT?: MissaoProdutoWhereInput | MissaoProdutoWhereInput[]
    id?: IntFilter<"MissaoProduto"> | number
    missaoId?: IntFilter<"MissaoProduto"> | number
    produtoId?: IntFilter<"MissaoProduto"> | number
    missao?: XOR<MissaoScalarRelationFilter, MissaoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type MissaoProdutoOrderByWithRelationInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
    missao?: MissaoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type MissaoProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    missaoId_produtoId?: MissaoProdutoMissaoIdProdutoIdCompoundUniqueInput
    AND?: MissaoProdutoWhereInput | MissaoProdutoWhereInput[]
    OR?: MissaoProdutoWhereInput[]
    NOT?: MissaoProdutoWhereInput | MissaoProdutoWhereInput[]
    missaoId?: IntFilter<"MissaoProduto"> | number
    produtoId?: IntFilter<"MissaoProduto"> | number
    missao?: XOR<MissaoScalarRelationFilter, MissaoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id" | "missaoId_produtoId">

  export type MissaoProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
    _count?: MissaoProdutoCountOrderByAggregateInput
    _avg?: MissaoProdutoAvgOrderByAggregateInput
    _max?: MissaoProdutoMaxOrderByAggregateInput
    _min?: MissaoProdutoMinOrderByAggregateInput
    _sum?: MissaoProdutoSumOrderByAggregateInput
  }

  export type MissaoProdutoScalarWhereWithAggregatesInput = {
    AND?: MissaoProdutoScalarWhereWithAggregatesInput | MissaoProdutoScalarWhereWithAggregatesInput[]
    OR?: MissaoProdutoScalarWhereWithAggregatesInput[]
    NOT?: MissaoProdutoScalarWhereWithAggregatesInput | MissaoProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissaoProduto"> | number
    missaoId?: IntWithAggregatesFilter<"MissaoProduto"> | number
    produtoId?: IntWithAggregatesFilter<"MissaoProduto"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConcorrenteCreateInput = {
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    missoes?: MissaoCreateNestedManyWithoutConcorrenteInput
  }

  export type ConcorrenteUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    missoes?: MissaoUncheckedCreateNestedManyWithoutConcorrenteInput
  }

  export type ConcorrenteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    missoes?: MissaoUpdateManyWithoutConcorrenteNestedInput
  }

  export type ConcorrenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    missoes?: MissaoUncheckedUpdateManyWithoutConcorrenteNestedInput
  }

  export type ConcorrenteCreateManyInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
  }

  export type ConcorrenteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConcorrenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    nome: string
    codigo?: string | null
    preco: number
    foto?: string | null
    missoes?: MissaoProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    codigo?: string | null
    preco: number
    foto?: string | null
    missoes?: MissaoProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    missoes?: MissaoProdutoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    missoes?: MissaoProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    codigo?: string | null
    preco: number
    foto?: string | null
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissaoCreateInput = {
    titulo: string
    status?: string
    criadaEm?: Date | string
    concorrente: ConcorrenteCreateNestedOneWithoutMissoesInput
    produtos?: MissaoProdutoCreateNestedManyWithoutMissaoInput
  }

  export type MissaoUncheckedCreateInput = {
    id?: number
    titulo: string
    status?: string
    criadaEm?: Date | string
    concorrenteId: number
    produtos?: MissaoProdutoUncheckedCreateNestedManyWithoutMissaoInput
  }

  export type MissaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    concorrente?: ConcorrenteUpdateOneRequiredWithoutMissoesNestedInput
    produtos?: MissaoProdutoUpdateManyWithoutMissaoNestedInput
  }

  export type MissaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    concorrenteId?: IntFieldUpdateOperationsInput | number
    produtos?: MissaoProdutoUncheckedUpdateManyWithoutMissaoNestedInput
  }

  export type MissaoCreateManyInput = {
    id?: number
    titulo: string
    status?: string
    criadaEm?: Date | string
    concorrenteId: number
  }

  export type MissaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    concorrenteId?: IntFieldUpdateOperationsInput | number
  }

  export type MissaoProdutoCreateInput = {
    missao: MissaoCreateNestedOneWithoutProdutosInput
    produto: ProdutoCreateNestedOneWithoutMissoesInput
  }

  export type MissaoProdutoUncheckedCreateInput = {
    id?: number
    missaoId: number
    produtoId: number
  }

  export type MissaoProdutoUpdateInput = {
    missao?: MissaoUpdateOneRequiredWithoutProdutosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutMissoesNestedInput
  }

  export type MissaoProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missaoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type MissaoProdutoCreateManyInput = {
    id?: number
    missaoId: number
    produtoId: number
  }

  export type MissaoProdutoUpdateManyMutationInput = {

  }

  export type MissaoProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missaoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MissaoListRelationFilter = {
    every?: MissaoWhereInput
    some?: MissaoWhereInput
    none?: MissaoWhereInput
  }

  export type MissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConcorrenteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type ConcorrenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConcorrenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type ConcorrenteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type ConcorrenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MissaoProdutoListRelationFilter = {
    every?: MissaoProdutoWhereInput
    some?: MissaoProdutoWhereInput
    none?: MissaoProdutoWhereInput
  }

  export type MissaoProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    foto?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    foto?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    foto?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConcorrenteScalarRelationFilter = {
    is?: ConcorrenteWhereInput
    isNot?: ConcorrenteWhereInput
  }

  export type MissaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    status?: SortOrder
    criadaEm?: SortOrder
    concorrenteId?: SortOrder
  }

  export type MissaoAvgOrderByAggregateInput = {
    id?: SortOrder
    concorrenteId?: SortOrder
  }

  export type MissaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    status?: SortOrder
    criadaEm?: SortOrder
    concorrenteId?: SortOrder
  }

  export type MissaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    status?: SortOrder
    criadaEm?: SortOrder
    concorrenteId?: SortOrder
  }

  export type MissaoSumOrderByAggregateInput = {
    id?: SortOrder
    concorrenteId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MissaoScalarRelationFilter = {
    is?: MissaoWhereInput
    isNot?: MissaoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type MissaoProdutoMissaoIdProdutoIdCompoundUniqueInput = {
    missaoId: number
    produtoId: number
  }

  export type MissaoProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
  }

  export type MissaoProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
  }

  export type MissaoProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
  }

  export type MissaoProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
  }

  export type MissaoProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    missaoId?: SortOrder
    produtoId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MissaoCreateNestedManyWithoutConcorrenteInput = {
    create?: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput> | MissaoCreateWithoutConcorrenteInput[] | MissaoUncheckedCreateWithoutConcorrenteInput[]
    connectOrCreate?: MissaoCreateOrConnectWithoutConcorrenteInput | MissaoCreateOrConnectWithoutConcorrenteInput[]
    createMany?: MissaoCreateManyConcorrenteInputEnvelope
    connect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
  }

  export type MissaoUncheckedCreateNestedManyWithoutConcorrenteInput = {
    create?: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput> | MissaoCreateWithoutConcorrenteInput[] | MissaoUncheckedCreateWithoutConcorrenteInput[]
    connectOrCreate?: MissaoCreateOrConnectWithoutConcorrenteInput | MissaoCreateOrConnectWithoutConcorrenteInput[]
    createMany?: MissaoCreateManyConcorrenteInputEnvelope
    connect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
  }

  export type MissaoUpdateManyWithoutConcorrenteNestedInput = {
    create?: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput> | MissaoCreateWithoutConcorrenteInput[] | MissaoUncheckedCreateWithoutConcorrenteInput[]
    connectOrCreate?: MissaoCreateOrConnectWithoutConcorrenteInput | MissaoCreateOrConnectWithoutConcorrenteInput[]
    upsert?: MissaoUpsertWithWhereUniqueWithoutConcorrenteInput | MissaoUpsertWithWhereUniqueWithoutConcorrenteInput[]
    createMany?: MissaoCreateManyConcorrenteInputEnvelope
    set?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    disconnect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    delete?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    connect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    update?: MissaoUpdateWithWhereUniqueWithoutConcorrenteInput | MissaoUpdateWithWhereUniqueWithoutConcorrenteInput[]
    updateMany?: MissaoUpdateManyWithWhereWithoutConcorrenteInput | MissaoUpdateManyWithWhereWithoutConcorrenteInput[]
    deleteMany?: MissaoScalarWhereInput | MissaoScalarWhereInput[]
  }

  export type MissaoUncheckedUpdateManyWithoutConcorrenteNestedInput = {
    create?: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput> | MissaoCreateWithoutConcorrenteInput[] | MissaoUncheckedCreateWithoutConcorrenteInput[]
    connectOrCreate?: MissaoCreateOrConnectWithoutConcorrenteInput | MissaoCreateOrConnectWithoutConcorrenteInput[]
    upsert?: MissaoUpsertWithWhereUniqueWithoutConcorrenteInput | MissaoUpsertWithWhereUniqueWithoutConcorrenteInput[]
    createMany?: MissaoCreateManyConcorrenteInputEnvelope
    set?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    disconnect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    delete?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    connect?: MissaoWhereUniqueInput | MissaoWhereUniqueInput[]
    update?: MissaoUpdateWithWhereUniqueWithoutConcorrenteInput | MissaoUpdateWithWhereUniqueWithoutConcorrenteInput[]
    updateMany?: MissaoUpdateManyWithWhereWithoutConcorrenteInput | MissaoUpdateManyWithWhereWithoutConcorrenteInput[]
    deleteMany?: MissaoScalarWhereInput | MissaoScalarWhereInput[]
  }

  export type MissaoProdutoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput> | MissaoProdutoCreateWithoutProdutoInput[] | MissaoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutProdutoInput | MissaoProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: MissaoProdutoCreateManyProdutoInputEnvelope
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
  }

  export type MissaoProdutoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput> | MissaoProdutoCreateWithoutProdutoInput[] | MissaoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutProdutoInput | MissaoProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: MissaoProdutoCreateManyProdutoInputEnvelope
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MissaoProdutoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput> | MissaoProdutoCreateWithoutProdutoInput[] | MissaoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutProdutoInput | MissaoProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: MissaoProdutoUpsertWithWhereUniqueWithoutProdutoInput | MissaoProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MissaoProdutoCreateManyProdutoInputEnvelope
    set?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    disconnect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    delete?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    update?: MissaoProdutoUpdateWithWhereUniqueWithoutProdutoInput | MissaoProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MissaoProdutoUpdateManyWithWhereWithoutProdutoInput | MissaoProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
  }

  export type MissaoProdutoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput> | MissaoProdutoCreateWithoutProdutoInput[] | MissaoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutProdutoInput | MissaoProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: MissaoProdutoUpsertWithWhereUniqueWithoutProdutoInput | MissaoProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MissaoProdutoCreateManyProdutoInputEnvelope
    set?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    disconnect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    delete?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    update?: MissaoProdutoUpdateWithWhereUniqueWithoutProdutoInput | MissaoProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MissaoProdutoUpdateManyWithWhereWithoutProdutoInput | MissaoProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
  }

  export type ConcorrenteCreateNestedOneWithoutMissoesInput = {
    create?: XOR<ConcorrenteCreateWithoutMissoesInput, ConcorrenteUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: ConcorrenteCreateOrConnectWithoutMissoesInput
    connect?: ConcorrenteWhereUniqueInput
  }

  export type MissaoProdutoCreateNestedManyWithoutMissaoInput = {
    create?: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput> | MissaoProdutoCreateWithoutMissaoInput[] | MissaoProdutoUncheckedCreateWithoutMissaoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutMissaoInput | MissaoProdutoCreateOrConnectWithoutMissaoInput[]
    createMany?: MissaoProdutoCreateManyMissaoInputEnvelope
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
  }

  export type MissaoProdutoUncheckedCreateNestedManyWithoutMissaoInput = {
    create?: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput> | MissaoProdutoCreateWithoutMissaoInput[] | MissaoProdutoUncheckedCreateWithoutMissaoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutMissaoInput | MissaoProdutoCreateOrConnectWithoutMissaoInput[]
    createMany?: MissaoProdutoCreateManyMissaoInputEnvelope
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConcorrenteUpdateOneRequiredWithoutMissoesNestedInput = {
    create?: XOR<ConcorrenteCreateWithoutMissoesInput, ConcorrenteUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: ConcorrenteCreateOrConnectWithoutMissoesInput
    upsert?: ConcorrenteUpsertWithoutMissoesInput
    connect?: ConcorrenteWhereUniqueInput
    update?: XOR<XOR<ConcorrenteUpdateToOneWithWhereWithoutMissoesInput, ConcorrenteUpdateWithoutMissoesInput>, ConcorrenteUncheckedUpdateWithoutMissoesInput>
  }

  export type MissaoProdutoUpdateManyWithoutMissaoNestedInput = {
    create?: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput> | MissaoProdutoCreateWithoutMissaoInput[] | MissaoProdutoUncheckedCreateWithoutMissaoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutMissaoInput | MissaoProdutoCreateOrConnectWithoutMissaoInput[]
    upsert?: MissaoProdutoUpsertWithWhereUniqueWithoutMissaoInput | MissaoProdutoUpsertWithWhereUniqueWithoutMissaoInput[]
    createMany?: MissaoProdutoCreateManyMissaoInputEnvelope
    set?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    disconnect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    delete?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    update?: MissaoProdutoUpdateWithWhereUniqueWithoutMissaoInput | MissaoProdutoUpdateWithWhereUniqueWithoutMissaoInput[]
    updateMany?: MissaoProdutoUpdateManyWithWhereWithoutMissaoInput | MissaoProdutoUpdateManyWithWhereWithoutMissaoInput[]
    deleteMany?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
  }

  export type MissaoProdutoUncheckedUpdateManyWithoutMissaoNestedInput = {
    create?: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput> | MissaoProdutoCreateWithoutMissaoInput[] | MissaoProdutoUncheckedCreateWithoutMissaoInput[]
    connectOrCreate?: MissaoProdutoCreateOrConnectWithoutMissaoInput | MissaoProdutoCreateOrConnectWithoutMissaoInput[]
    upsert?: MissaoProdutoUpsertWithWhereUniqueWithoutMissaoInput | MissaoProdutoUpsertWithWhereUniqueWithoutMissaoInput[]
    createMany?: MissaoProdutoCreateManyMissaoInputEnvelope
    set?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    disconnect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    delete?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    connect?: MissaoProdutoWhereUniqueInput | MissaoProdutoWhereUniqueInput[]
    update?: MissaoProdutoUpdateWithWhereUniqueWithoutMissaoInput | MissaoProdutoUpdateWithWhereUniqueWithoutMissaoInput[]
    updateMany?: MissaoProdutoUpdateManyWithWhereWithoutMissaoInput | MissaoProdutoUpdateManyWithWhereWithoutMissaoInput[]
    deleteMany?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
  }

  export type MissaoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<MissaoCreateWithoutProdutosInput, MissaoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: MissaoCreateOrConnectWithoutProdutosInput
    connect?: MissaoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutMissoesInput = {
    create?: XOR<ProdutoCreateWithoutMissoesInput, ProdutoUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMissoesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type MissaoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<MissaoCreateWithoutProdutosInput, MissaoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: MissaoCreateOrConnectWithoutProdutosInput
    upsert?: MissaoUpsertWithoutProdutosInput
    connect?: MissaoWhereUniqueInput
    update?: XOR<XOR<MissaoUpdateToOneWithWhereWithoutProdutosInput, MissaoUpdateWithoutProdutosInput>, MissaoUncheckedUpdateWithoutProdutosInput>
  }

  export type ProdutoUpdateOneRequiredWithoutMissoesNestedInput = {
    create?: XOR<ProdutoCreateWithoutMissoesInput, ProdutoUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMissoesInput
    upsert?: ProdutoUpsertWithoutMissoesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutMissoesInput, ProdutoUpdateWithoutMissoesInput>, ProdutoUncheckedUpdateWithoutMissoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MissaoCreateWithoutConcorrenteInput = {
    titulo: string
    status?: string
    criadaEm?: Date | string
    produtos?: MissaoProdutoCreateNestedManyWithoutMissaoInput
  }

  export type MissaoUncheckedCreateWithoutConcorrenteInput = {
    id?: number
    titulo: string
    status?: string
    criadaEm?: Date | string
    produtos?: MissaoProdutoUncheckedCreateNestedManyWithoutMissaoInput
  }

  export type MissaoCreateOrConnectWithoutConcorrenteInput = {
    where: MissaoWhereUniqueInput
    create: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput>
  }

  export type MissaoCreateManyConcorrenteInputEnvelope = {
    data: MissaoCreateManyConcorrenteInput | MissaoCreateManyConcorrenteInput[]
    skipDuplicates?: boolean
  }

  export type MissaoUpsertWithWhereUniqueWithoutConcorrenteInput = {
    where: MissaoWhereUniqueInput
    update: XOR<MissaoUpdateWithoutConcorrenteInput, MissaoUncheckedUpdateWithoutConcorrenteInput>
    create: XOR<MissaoCreateWithoutConcorrenteInput, MissaoUncheckedCreateWithoutConcorrenteInput>
  }

  export type MissaoUpdateWithWhereUniqueWithoutConcorrenteInput = {
    where: MissaoWhereUniqueInput
    data: XOR<MissaoUpdateWithoutConcorrenteInput, MissaoUncheckedUpdateWithoutConcorrenteInput>
  }

  export type MissaoUpdateManyWithWhereWithoutConcorrenteInput = {
    where: MissaoScalarWhereInput
    data: XOR<MissaoUpdateManyMutationInput, MissaoUncheckedUpdateManyWithoutConcorrenteInput>
  }

  export type MissaoScalarWhereInput = {
    AND?: MissaoScalarWhereInput | MissaoScalarWhereInput[]
    OR?: MissaoScalarWhereInput[]
    NOT?: MissaoScalarWhereInput | MissaoScalarWhereInput[]
    id?: IntFilter<"Missao"> | number
    titulo?: StringFilter<"Missao"> | string
    status?: StringFilter<"Missao"> | string
    criadaEm?: DateTimeFilter<"Missao"> | Date | string
    concorrenteId?: IntFilter<"Missao"> | number
  }

  export type MissaoProdutoCreateWithoutProdutoInput = {
    missao: MissaoCreateNestedOneWithoutProdutosInput
  }

  export type MissaoProdutoUncheckedCreateWithoutProdutoInput = {
    id?: number
    missaoId: number
  }

  export type MissaoProdutoCreateOrConnectWithoutProdutoInput = {
    where: MissaoProdutoWhereUniqueInput
    create: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type MissaoProdutoCreateManyProdutoInputEnvelope = {
    data: MissaoProdutoCreateManyProdutoInput | MissaoProdutoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type MissaoProdutoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: MissaoProdutoWhereUniqueInput
    update: XOR<MissaoProdutoUpdateWithoutProdutoInput, MissaoProdutoUncheckedUpdateWithoutProdutoInput>
    create: XOR<MissaoProdutoCreateWithoutProdutoInput, MissaoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type MissaoProdutoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: MissaoProdutoWhereUniqueInput
    data: XOR<MissaoProdutoUpdateWithoutProdutoInput, MissaoProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type MissaoProdutoUpdateManyWithWhereWithoutProdutoInput = {
    where: MissaoProdutoScalarWhereInput
    data: XOR<MissaoProdutoUpdateManyMutationInput, MissaoProdutoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type MissaoProdutoScalarWhereInput = {
    AND?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
    OR?: MissaoProdutoScalarWhereInput[]
    NOT?: MissaoProdutoScalarWhereInput | MissaoProdutoScalarWhereInput[]
    id?: IntFilter<"MissaoProduto"> | number
    missaoId?: IntFilter<"MissaoProduto"> | number
    produtoId?: IntFilter<"MissaoProduto"> | number
  }

  export type ConcorrenteCreateWithoutMissoesInput = {
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
  }

  export type ConcorrenteUncheckedCreateWithoutMissoesInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
  }

  export type ConcorrenteCreateOrConnectWithoutMissoesInput = {
    where: ConcorrenteWhereUniqueInput
    create: XOR<ConcorrenteCreateWithoutMissoesInput, ConcorrenteUncheckedCreateWithoutMissoesInput>
  }

  export type MissaoProdutoCreateWithoutMissaoInput = {
    produto: ProdutoCreateNestedOneWithoutMissoesInput
  }

  export type MissaoProdutoUncheckedCreateWithoutMissaoInput = {
    id?: number
    produtoId: number
  }

  export type MissaoProdutoCreateOrConnectWithoutMissaoInput = {
    where: MissaoProdutoWhereUniqueInput
    create: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput>
  }

  export type MissaoProdutoCreateManyMissaoInputEnvelope = {
    data: MissaoProdutoCreateManyMissaoInput | MissaoProdutoCreateManyMissaoInput[]
    skipDuplicates?: boolean
  }

  export type ConcorrenteUpsertWithoutMissoesInput = {
    update: XOR<ConcorrenteUpdateWithoutMissoesInput, ConcorrenteUncheckedUpdateWithoutMissoesInput>
    create: XOR<ConcorrenteCreateWithoutMissoesInput, ConcorrenteUncheckedCreateWithoutMissoesInput>
    where?: ConcorrenteWhereInput
  }

  export type ConcorrenteUpdateToOneWithWhereWithoutMissoesInput = {
    where?: ConcorrenteWhereInput
    data: XOR<ConcorrenteUpdateWithoutMissoesInput, ConcorrenteUncheckedUpdateWithoutMissoesInput>
  }

  export type ConcorrenteUpdateWithoutMissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConcorrenteUncheckedUpdateWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissaoProdutoUpsertWithWhereUniqueWithoutMissaoInput = {
    where: MissaoProdutoWhereUniqueInput
    update: XOR<MissaoProdutoUpdateWithoutMissaoInput, MissaoProdutoUncheckedUpdateWithoutMissaoInput>
    create: XOR<MissaoProdutoCreateWithoutMissaoInput, MissaoProdutoUncheckedCreateWithoutMissaoInput>
  }

  export type MissaoProdutoUpdateWithWhereUniqueWithoutMissaoInput = {
    where: MissaoProdutoWhereUniqueInput
    data: XOR<MissaoProdutoUpdateWithoutMissaoInput, MissaoProdutoUncheckedUpdateWithoutMissaoInput>
  }

  export type MissaoProdutoUpdateManyWithWhereWithoutMissaoInput = {
    where: MissaoProdutoScalarWhereInput
    data: XOR<MissaoProdutoUpdateManyMutationInput, MissaoProdutoUncheckedUpdateManyWithoutMissaoInput>
  }

  export type MissaoCreateWithoutProdutosInput = {
    titulo: string
    status?: string
    criadaEm?: Date | string
    concorrente: ConcorrenteCreateNestedOneWithoutMissoesInput
  }

  export type MissaoUncheckedCreateWithoutProdutosInput = {
    id?: number
    titulo: string
    status?: string
    criadaEm?: Date | string
    concorrenteId: number
  }

  export type MissaoCreateOrConnectWithoutProdutosInput = {
    where: MissaoWhereUniqueInput
    create: XOR<MissaoCreateWithoutProdutosInput, MissaoUncheckedCreateWithoutProdutosInput>
  }

  export type ProdutoCreateWithoutMissoesInput = {
    nome: string
    codigo?: string | null
    preco: number
    foto?: string | null
  }

  export type ProdutoUncheckedCreateWithoutMissoesInput = {
    id?: number
    nome: string
    codigo?: string | null
    preco: number
    foto?: string | null
  }

  export type ProdutoCreateOrConnectWithoutMissoesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMissoesInput, ProdutoUncheckedCreateWithoutMissoesInput>
  }

  export type MissaoUpsertWithoutProdutosInput = {
    update: XOR<MissaoUpdateWithoutProdutosInput, MissaoUncheckedUpdateWithoutProdutosInput>
    create: XOR<MissaoCreateWithoutProdutosInput, MissaoUncheckedCreateWithoutProdutosInput>
    where?: MissaoWhereInput
  }

  export type MissaoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: MissaoWhereInput
    data: XOR<MissaoUpdateWithoutProdutosInput, MissaoUncheckedUpdateWithoutProdutosInput>
  }

  export type MissaoUpdateWithoutProdutosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    concorrente?: ConcorrenteUpdateOneRequiredWithoutMissoesNestedInput
  }

  export type MissaoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    concorrenteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpsertWithoutMissoesInput = {
    update: XOR<ProdutoUpdateWithoutMissoesInput, ProdutoUncheckedUpdateWithoutMissoesInput>
    create: XOR<ProdutoCreateWithoutMissoesInput, ProdutoUncheckedCreateWithoutMissoesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutMissoesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutMissoesInput, ProdutoUncheckedUpdateWithoutMissoesInput>
  }

  export type ProdutoUpdateWithoutMissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUncheckedUpdateWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissaoCreateManyConcorrenteInput = {
    id?: number
    titulo: string
    status?: string
    criadaEm?: Date | string
  }

  export type MissaoUpdateWithoutConcorrenteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: MissaoProdutoUpdateManyWithoutMissaoNestedInput
  }

  export type MissaoUncheckedUpdateWithoutConcorrenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: MissaoProdutoUncheckedUpdateManyWithoutMissaoNestedInput
  }

  export type MissaoUncheckedUpdateManyWithoutConcorrenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissaoProdutoCreateManyProdutoInput = {
    id?: number
    missaoId: number
  }

  export type MissaoProdutoUpdateWithoutProdutoInput = {
    missao?: MissaoUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type MissaoProdutoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    missaoId?: IntFieldUpdateOperationsInput | number
  }

  export type MissaoProdutoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    missaoId?: IntFieldUpdateOperationsInput | number
  }

  export type MissaoProdutoCreateManyMissaoInput = {
    id?: number
    produtoId: number
  }

  export type MissaoProdutoUpdateWithoutMissaoInput = {
    produto?: ProdutoUpdateOneRequiredWithoutMissoesNestedInput
  }

  export type MissaoProdutoUncheckedUpdateWithoutMissaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type MissaoProdutoUncheckedUpdateManyWithoutMissaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}