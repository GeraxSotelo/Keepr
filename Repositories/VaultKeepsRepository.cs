using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal VaultKeep Find(VaultKeep newData)
    {
      string sql = @"
      SELECT * FROM vaultkeeps
      WHERE (keepId = @KeepId AND vaultId = @VaultId)";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, newData);
    }

    internal void Create(VaultKeep VaultKeepData)
    {
      string sql = @"
        INSERT INTO vaultkeeps 
        (userId, keepId, vaultId)
        VALUES
        (@UserId, @KeepId, @VaultId);
        SELECT LAST_INSERT_ID();";
      _db.ExecuteScalar<int>(sql, VaultKeepData);
    }

    internal void Delete(VaultKeep vk)
    {
      string sql = "DELETE FROM vaultkeeps WHERE (userId = @UserId AND keepId = @KeepId AND vaultId = @VaultId)";
      _db.Execute(sql, vk);
    }
  }
}