using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Keep> Get()
    {
      string sql = "SELECT * FROM keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }

    internal Keep GetById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }

    internal IEnumerable<Keep> GetKeepsByUserId(string userId)
    {
      string sql = "SELECT * FROM keeps WHERE userId = @userId";
      return _db.Query<Keep>(sql, new { userId });
    }

    internal IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      string sql = @"
      SELECT k.* FROM vaultkeeps vk
      INNER JOIN keeps k ON k.id = vk.keepId 
      WHERE (vaultId = @VaultId)";
      return _db.Query<Keep>(sql, new { vaultId });
      //STUB removed AND vk.userId = @UserId. Ask about it
    }

    internal int Create(Keep KeepData)
    {
      string sql = @"
        INSERT INTO keeps 
        (userId, name, description, img, isPrivate, views , shares, keeps)
        VALUES
        (@UserId, @Name, @Description, @Img, @IsPrivate, @Views, @Shares, @Keeps);
        SELECT LAST_INSERT_ID();";
      int id = _db.ExecuteScalar<int>(sql, KeepData);
      return id;
    }

    internal void Edit(Keep update)
    {
      string sql = @"
      UPDATE keeps
      SET
      name = @Name, description = @Description, img = @Img, isPrivate = @IsPrivate, views = @Views, shares = @Shares, keeps = @Keeps
      WHERE id = @id;";
      _db.Execute(sql, update);
    }

    internal void Delete(int id, string userId)
    {
      string sql = "DELETE FROM keeps WHERE (id = @id AND userId = @userId)";
      _db.Execute(sql, new { id, userId });
    }
  }
}