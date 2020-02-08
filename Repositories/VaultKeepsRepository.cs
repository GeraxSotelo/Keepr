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
      return _db.QueryFirstOrDefault(sql, newData);
    }

    internal void Create(VaultKeep VaultKeepData)
    {
      string sql = @"
        INSERT INTO vaultkeeps 
        (keepId, vaultId)
        VALUES
        (@KeepId, @VaultId);
        SELECT LAST_INSERT_ID();";
      _db.ExecuteScalar<int>(sql, VaultKeepData);
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @id";
      _db.Execute(sql, new { id });
    }
  }
}